module.exports = {
  mode:'jit',
  env:{NEXT_PUCBLIC_GRAPHCMS_URL:process.env.NEXT_PUCBLIC_GRAPHCMS_URL},
  purge: ["./src/**/*.{html,js}"],
  content: [],
  theme: {
    extend: {

      colors:{
        nonact: '#8f8e8e',
        cwhite: '#f8f8f8',
        cgray: '#303030',
        inputg:'#242424',
        inputgg:'#131313'
        
      }



    },
  },
  plugins: [],
}
