import { ImageResponse } from 'next/og';

export const alt = 'DotComMedia — digital growth built for education';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#13232e',
          color: '#f7f9fa',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 44, height: 44, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <div style={{ width: 20, height: 20, background: '#1a6a58' }} />
            <div style={{ width: 20, height: 20, background: '#c3922e' }} />
            <div style={{ width: 20, height: 20, background: '#c3922e' }} />
            <div style={{ width: 20, height: 20, background: '#1a6a58' }} />
          </div>
          <div style={{ fontSize: 28, letterSpacing: -0.5 }}>DotComMedia</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 900 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, letterSpacing: -1.5 }}>
            Digital growth built for education.
          </div>
          <div style={{ fontSize: 26, color: '#c5d0d6', maxWidth: 760 }}>
            Websites, search, campaigns and lead systems for schools, colleges and learning businesses.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
