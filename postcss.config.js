module.exports = {
    plugins: {
      "postcss-preset-env": {
        stage: 1,
        importFrom: "./src/assets/variables.css"
      },
      "rucksack-css": {}
    }
  };



module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-custom-media':{
            importFrom :  [
                {
                    customMedia: { '--t':  '(min-width: 980px)'}
                },
                {
                    customMedia : { '--d': '(min-width: 1270px)'}
                }
            ]
        }

    }
}