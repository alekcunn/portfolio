/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './build', // Changes the build output directory to `./dist`.

    experimental: {
      turbo: {
        rules: {
          '*.svg': {
            loaders:['@svgr/webpack'],
            as: '*.js'

          }

        }
      }
    }


    // webpack(config) {
    //   config.module.rules.push({
    //     test: /\.svg$/,
    //     use: ['@svgr/webpack'],
    //   })
    //   config.module.rules.push(
    //   {
    //     test: /\.(png|jpe?g|gif|svg)$/i,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           name: '[name].[hash].[ext]', // Optional: Customize output filename
    //           outputPath: 'images', // Optional: Specify output directory
    //         },
    //       },
    //     ],
    //   }
    
    // )
    }
   
export default nextConfig