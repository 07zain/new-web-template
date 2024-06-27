import React from 'react'
import Image from 'next/image';
const Packagemessage = () => {
  return (
   
       <section className="section-gap about-with-shape">
            <div className="row justify-content-between">
                <div className="col-lg-6"> 
                    <div className="section-title mb-md-gap-30 wow fadeInLeft" data-wow-delay="0.3s">
                            <span className="title-tag localseo">Local SEO Packages</span> 
                            
                            <br/>
                            
                            <h2 className="title myTitle"> We build presence of this world </h2>.
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, in enim id necessitatibus perspiciatis dolore tenetur dolor modi tempora nam odit corporis doloribus obcaecati. Sed doloremque autem minima quo beatae sapiente veniam molestiae vel porro, officiis id suscipit, esse quibusdam nam magnam optio. Facilis iusto inventore quidem. Praesentium, facere ducimus!</p>

                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique voluptatem ex, iure eligendi provident non expedita distinctio minima explicabo a, quia quidem fugiat ab. Provident laudantium atque id error!
                            </p>

                            
                    
                            <span className="animate animate4 "></span>
                            <span className="animate animateMob animate2 "></span>
                        </div>
                </div>

                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                    <Image src="../assets/WebDevelopment.svg" alt="" className="serviceImg" width={500} height={500}/>
                </div>
                
                <a href="#seo-packages"className="main-btn small-size rounded-btn icon-right">SEO Packages<i className="fal fa-long-arrow-right btn_fa"></i></a>
            </div>
        </section>
  
  )
}

export default Packagemessage;
