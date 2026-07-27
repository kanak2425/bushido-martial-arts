// Web Audio API Synthesizer for Bushido Dojo SFX

let audioCtx: AudioContext | null = null;
let soundMuted = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isAudioMuted(): boolean {
  return soundMuted;
}

export function toggleAudioMute(): boolean {
  soundMuted = !soundMuted;
  return soundMuted;
}

/**
 * Play a cinematic Japanese Gong / Metallic Chime when the dojo doors open or logo appears.
 */
export function playCinematicDoorSound() {
  if (soundMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    // Deep Taiko Bass Resonator
    const oscBass = ctx.createOscillator();
    const gainBass = ctx.createGain();
    oscBass.type = 'sine';
    oscBass.frequency.setValueAtTime(80, now);
    oscBass.frequency.exponentialRampToValueAtTime(30, now + 1.2);
    
    gainBass.gain.setValueAtTime(0.7, now);
    gainBass.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
    
    oscBass.connect(gainBass);
    gainBass.connect(ctx.destination);

    // Metallic Bronze Chime / Singing Bowl Harmonics
    const frequencies = [220, 330, 440, 660, 880, 1320];
    frequencies.forEach((freq, i) => {
      const oscChime = ctx.createOscillator();
      const gainChime = ctx.createGain();
      
      oscChime.type = 'triangle';
      oscChime.frequency.setValueAtTime(freq * (1 + i * 0.002), now);

      const level = 0.15 / (i + 1);
      gainChime.gain.setValueAtTime(0.001, now);
      gainChime.gain.linearRampToValueAtTime(level, now + 0.1);
      gainChime.gain.exponentialRampToValueAtTime(0.0001, now + 2.5 + i * 0.2);

      oscChime.connect(gainChime);
      gainChime.connect(ctx.destination);

      oscChime.start(now);
      oscChime.stop(now + 3.0);
    });

    oscBass.start(now);
    oscBass.stop(now + 2.0);
  } catch (e) {
    console.warn('Audio playback restricted', e);
  }
}

/**
 * Play subtle metallic sword sheen / wooden click for UI interactions
 */
export function playSubtleClickSFX() {
  if (soundMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  } catch (e) {
    // Ignore autoplay restrictions
  }
}
