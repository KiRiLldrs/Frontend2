function loadData(filename: string){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', filename, true);

    xhr.onload = function(){
        if (xhr.status != 200){
            alert('Error ' + xhr.status + ': ' + xhr.statusText);
        }
        else{
            const data = JSON.parse(xhr.responseText);

            console.log('Universities of Samara:');
            data.universities.forEach((uni: any, index: number) => {
                console.log(`\nUniversity ${index+1}`);
                console.log(`\nName: ${uni.name}`);
                console.log(`\nYear: ${uni.year}`);
            });



            alert(`${data.universities.length} universities were loaded!`);
        }
    }

    xhr.onerror = function(){
        alert('Request failed!');
    }

    xhr.send();
}
