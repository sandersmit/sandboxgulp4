/*jslint node: true */
/*jshint esversion: 6 */
"use strict";

(function () {
    window.addEventListener("load", function () {
        console.log("assesment.js loaded?");
        const endpoint1 = `http://www.omdbapi.com/?s=bridge&apiKey=6c3a2d45`;
        const endpoint2 = `http://www.omdbapi.com/?i=tt3682448&apikey=6c3a2d45`;
        // const endpoint1 = `data/amazon.json`;
        // const endpoint2 = `data/amazon2.json`;

        //const endpoint = `data/amazon.json`;
        //empty var to put array into
        let movies = '';
        //comment??
        let search_termNEW = "";
        const searchNEW = document.getElementById("searchNEW");
        const resultsNEW = document.getElementById("resultsNEW");
        const predefinedNEW = document.getElementById("predefinedNEW");

        

        const fetchEndpoint1 = function () {
            fetch(endpoint1).then(function (response) {
                return response.json();
            }).then(function (allMovies) {
                movies = allMovies;
                displayMovies();  
            }).catch(function (error) {
                return alert(error);
            });
        };
        


        const fetchEndpoint2 = function () {
            fetch(endpoint2).then(function (response) {
                return response.json();
            }).then(function (predefinedMovies) {
      
                printpredefined(predefinedMovies);               

            }).catch(function (error) {
                return alert(error);
            });
        };

        //check if search input is on page  
        if (document.getElementById('searchNEW') != null){
            console.log("Search page"); 
            fetchEndpoint1();
            searchNEW.addEventListener("input", checkInput);
        }else{
            console.log("Detail page"); 
            fetchEndpoint2();
        }
        

        function printpredefined(predefinedMovies) {

            //Looping trough object ES8 compile babel..
            for (const [key, value] of Object.entries(predefinedMovies)) {
                console.log(`${key}: ${value}`);
                const li = document.createElement("li");
                const ratingUl = document.createElement("ul");
                const myListArray = [];
                const newlist = document.createElement('ul');
                const newParagraph = document.createElement('p');
                
                if (key === 'Ratings') {
                    console.log("RATINGS??"); 
                    li.innerHTML = `<h4>${key}</h4>`;   
                    for (var i = 0; i < value.length; i++) {
                        console.log("length rating value" + value.length);
                        console.log(`rating!: ${value[i].Source} value!: ${value[i].Value}`);
                        ratingUl.innerHTML += `<li><i>${value[i].Source}</i><span>${value[i].Value}</span></li>`;
                        
                    }
                    
                    console.log("ratingUl"+ratingUl.innerHTML);            
                    predefinedNEW.appendChild(li).appendChild(ratingUl).classList.add('ratings');
        
                }
                else if (key === 'Plot') {
                    console.log("title"+key+"counting"+value.length);
                    if(value.length > 200)
                    {
                        newParagraph.classList.add('newPar');
                        console.log("LANG!!!"+value.length);
                        li.innerHTML = `<h4>${key}</h4>`;
                        let text = document.createTextNode(value);
                        newParagraph.appendChild(text);
                        li.appendChild(newParagraph);
                        newParagraph.parentElement.classList.add('plot');
                        predefinedNEW.appendChild(li);
                    }else{
                        console.log("kort genoeg"+value.length);
                    }
                }
                else if (key === 'Genre') {
                    
                    makeLists(value,key,li,myListArray,newlist);
                    
                } 
                else if (key === 'Writer') {
                    
                    makeLists(value,key,li,myListArray,newlist);
                    
                } 
                else if (key === 'Actors') {
                    
                    makeLists(value,key,li,myListArray,newlist);
                    
                } 
                else if (key === 'Poster') {
                    console.log(`Poster source:${value}`);
                    //placing it on top
                    predefinedNEW.firstElementChild.nextElementSibling.innerHTML = `<img src=${value}>`;
                   
                }else {

                    li.innerHTML = `<h4>${key}</h4>` +
                    `<p>${value}</p>`;
                    predefinedNEW.appendChild(li);
                }


            }


        }


        function makeLists(value,key, li , myListArray, newlist){
            
                    myListArray = value.replace(/,/g, '').split(" ");
                    console.log(myListArray.length);
                    console.log( "Genre new array:" + myListArray[0]);
                    newlist.classList.add('newlist');  
                    li.innerHTML = `<h4>${key}</h4>`;
                    
                    
                    for (var k = 0; k < myListArray.length; k++) {
                        console.log("inhoud:" +myListArray[k]);
                        newlist.innerHTML += '<li>'+ myListArray[k]+ '</li>';
                    }
                    
                    
                    predefinedNEW.appendChild(li).appendChild(newlist);
        }






        function displayMovies() {
            resultsNEW.innerHTML = "";

            movies.Search.filter(function (item) {
                for (var i = 0; i < 4; i++) {
                    console.log("index" + i);
                    return item.Title.toLowerCase().includes(search_termNEW);
                }


            }).forEach(function (index) {
                let li = document.createElement("li");
                li.innerHTML =
                "<img src=" + index.Poster + ">"+
                "<span> Title:" + index.Title + "</span> " +
                "<span> Type: " + index.Type + "</span>" +
                "<span> Year: " + index.Year + "</span>" +
                "<span> imdbID: " + index.imdbID + "</span>";
                resultsNEW.appendChild(li);
            });
        }
   
        function checkInput (event) {
            search_termNEW = event.target.value.toLowerCase();
            console.log("test" + search_termNEW);
            displayMovies();
        }

    });
})();