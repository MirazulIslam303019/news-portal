const loadNews=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayNews(data))
}
const displayNews=head=>{
    const container=document.getElementById('headers');
    console.log(head)
    const Div=document.createElement('div');
    Div.innerHTML=`
    <div class="d-flex justify-content-between ">
    <a class="text-secondary text-decoration-none" href="'${head.data.news_category[0].category_id}'">Home</a>
    <a class="text-secondary text-decoration-none" href="#" onclick="loadNewsDetails('${head.data.news_category[0].category_id}')">${head.data.news_category[0].category_name} </a>
    <a class="text-secondary text-decoration-none" href="#" onclick="loadNewsDetails('${head.data.news_category[1].category_id}')">${head.data.news_category[1].category_name}</a>
    <a class="text-secondary text-decoration-none" href="#" onclick="loadNewsDetails('${head.data.news_category[2].category_id}')">${head.data.news_category[2].category_name}</a>
    <a class="text-secondary text-decoration-none" href="#" onclick="loadNewsDetails('${head.data.news_category[3].category_id}')">${head.data.news_category[3].category_name}</a>
    <a class="text-primary text-decoration-none" href="#" onclick="loadNewsDetails('${head.data.news_category[4].category_id}')">${head.data.news_category[4].category_name}</a>
    <a class="text-secondary text-decoration-none" href="#" onclick="loadNewsDetails('${head.data.news_category[5].category_id}')">${head.data.news_category[5].category_name}</a>
    <a class="text-secondary text-decoration-none" href="#" onclick="loadNewsDetails('${head.data.news_category[6].category_id}')">${head.data.news_category[6].category_name}</a>
    <a class="text-secondary text-decoration-none" href="#" onclick="loadNewsDetails('${head.data.news_category[7].category_id}')">${head.data.news_category[7].category_name}</a>
    </div>
    `;
   
container.appendChild(Div);

}
const loadNewsDetails=Miraz=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${Miraz}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data.data
        ))
}
const displayDetails=Details=>{
    console.log(Details)
    const Container=document.getElementById('containerTwo');
   Container.innerHTML="";
    for(const Value of Details){
        console.log(Value);
        const Div=document.createElement('div');
        Div.innerHTML=`
        <div class="card my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" >
        <div class="row g-0 " >
        <div class="col-md-4">
                <img src="${Value.image_url }" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${Value.title}</h5>
                  <p class="card-text text-secondary">${Value.details}</p>
                  
                 
                 <div class="d-flex justify-content-between">

                 <div class="">
                 <img src="${Value.author.img }" class=" " style="width:50px; border-radius:50px" alt="...">
                 <p class="card-text text-body-secondary">${Value.author.name }</p>
                 </div>
                 

                 
                 <div>
                 <p> <i class="fa-regular fa-eye fs-4"></i> ${Value.total_view}</p>
                 </div>
                 <div>
                 <i class="fa-solid fa-star-half-stroke fs-4"></i>
                 <i class="fa-regular fa-star fs-4"></i>
                 <i class="fa-regular fa-star fs-4"></i>
                 <i class="fa-regular fa-star fs-4"></i>
                 
                 </div>
                 <div>
                 <i class="fa-solid fa-arrow-right fs-4"></i>
                 </div>
                 

                 </div>
                 
                  
                </div>
              </div>
              </div>
              </div>
        `;
        Container.appendChild(Div)
    }
   
}

loadNews();