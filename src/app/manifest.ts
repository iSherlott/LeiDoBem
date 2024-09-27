import type { MetadataRoute } from 'next'
 
interface MManifest extends MetadataRoute.Manifest {
  application_icon: string
}

export default function manifest(): MManifest {
  return {
    name: 'Lei Do Bem MVP',
    short_name: 'LDB MVP',
    description: 'Modelo de MVP da versão do lei do bem 2.0',
    start_url: '/bypass',
    application_icon: 'https://connect.fi-group.com/favicon.ico',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0000a4',
    icons: [],
  }
}