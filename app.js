(function(){
    $.ajax({
        type: "GET",
        url: "https://api.myjson.com/bins/17ocpi",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            let carouselElement = "";
            $.each(response, function () {            
                let eTitle = `<div class="d-flex h-50 align-items-end justify-content-center"><h1>${this.title}</h1></div>`
                let eText =  `<div class="d-flex h-50 align-items-start justify-content-center box-etxt"> <p>${this.text}</p> </div>`
                if(carouselElement === "") {                    
                    carouselElement = `<div class="carousel-item active" style="background-image: url('${this.image}')">${eTitle} ${eText}</div>`;  
                }else{ 
                    carouselElement = `<div class="carousel-item" style="background-image: url('${this.image}')">${eTitle} ${eText}</div>`;
                }
                $("#carousel-content").prepend(carouselElement);
             });
        },
        error: function () {
            console.log("Error request");
        }
    });
})();