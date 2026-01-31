export function interpolate(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

export function hash(x: number, y: number): number {
  const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return h - Math.floor(h);
}

export function perlinNoise(x: number, y: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  
  const u = fade(xf);
  const v = fade(yf);
  
  const aa = hash(xi, yi);
  const ab = hash(xi, yi + 1);
  const ba = hash(xi + 1, yi);
  const bb = hash(xi + 1, yi + 1);
  
  const x1 = interpolate(aa, ba, u);
  const x2 = interpolate(ab, bb, u);
  
  return interpolate(x1, x2, v);
}

export function noise(x: number, y: number, time: number, lineIndex: number): number {
  let value = 0;
  let amplitude = 1;
  let frequency = 1;
  
  const lineTimeOffset = lineIndex * 0.3;
  const linePhase = lineIndex * 0.2;
  
  for (let i = 0; i < 3; i++) {
    const nx = (x + time * 15 + lineTimeOffset * 20) * frequency * 0.003;
    const ny = (y + i * 50 + linePhase * 100) * frequency * 0.003;
    value += (perlinNoise(nx, ny) - 0.5) * amplitude;
    amplitude *= 0.5;
    frequency *= 2;
  }
  
  const primaryWave = Math.sin(x * 0.008 + time * 0.6 + lineIndex * 0.3) * 40;
  const secondaryWave = Math.sin(x * 0.015 + time * 0.9 + lineIndex * 0.5) * 20;
  const tertiaryWave = Math.sin(x * 0.004 + time * 0.4 + lineIndex * 0.15) * 25;
  
  return value * 60 + primaryWave + secondaryWave * 0.5 + tertiaryWave * 0.7;
}
