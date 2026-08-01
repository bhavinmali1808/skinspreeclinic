// Web Audio API & Desktop Browser Notification Utility

export const playCompletionSound = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Create dual-tone chime (E5 -> A5: 659Hz -> 880Hz)
    const now = ctx.currentTime;
    
    // First note
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now); // E5
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.4);

    // Second note (slightly delayed)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(880.00, now + 0.15); // A5
    gain2.gain.setValueAtTime(0.4, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.65);

  } catch (err) {
    console.warn("Audio playback not allowed or supported:", err);
  }
};

export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    alert("Browser desktop notifications are not supported in your browser.");
    return false;
  }
  if (Notification.permission === "granted") {
    return true;
  }
  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }
  return false;
};

export const notifyTaskComplete = async (title, body) => {
  // Play completion sound
  playCompletionSound();

  // Show browser notification if allowed
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification(title || "Task Completed!", {
        body: body || "Your SkinSpree Clinic request has been processed successfully.",
        icon: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80",
        badge: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80",
        tag: "skinspree-task-notification"
      });
    } else if (Notification.permission !== "denied") {
      const granted = await Notification.requestPermission();
      if (granted) {
        new Notification(title || "Task Completed!", {
          body: body || "Your SkinSpree Clinic request has been processed successfully.",
          icon: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80",
        });
      }
    }
  }
};
