var genres = ['Jazz', 'Pop', 'Dangdut']

// for loop
for(i=0; i<genres.length; i++) {
    document.write('I chose ' + genres[i]+ '<br>')
}

//for each
genres.forEach( genre => {
    document.write('My favorite Genre is ' + genre + '<br>')
})