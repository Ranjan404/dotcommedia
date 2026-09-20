import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#13232e',
          display: 'flex',
          padding: 5,
          gap: 2,
        }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ flex: 1, background: '#1a6a58' }} />
          <div style={{ flex: 1, background: '#c3922e' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ flex: 1, background: '#c3922e' }} />
          <div style={{ flex: 1, background: '#1a6a58' }} />
        </div>
      </div>
    ),
    size,
  );
}
