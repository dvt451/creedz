export default function Services() {
   const services = [
      {
         title: 'Design',
         list: [
            'Graphic Design',
            'UI/UX',
            'Banners',
            '3D design',
            'Application',
            'Branding',
            'Logo design',
            'Product Design',
            'Printing Files',
            'Presentations',
            'Social Media Design',
         ]
      },
      {
         title: 'Development',
         list: [
            'Webflow & Tilda',
            'Wordpress & Shopify',
            'React JS & React Native',
            'iOS + Android App',
            'Vue JS',
            'Angular JS',
            'Laravel, Yii2 etc',
            'MySql, PostreSql etc',
            'Data Architecture',
         ]
      },
      {
         title: 'Animation',
         list: [
            '2D Animation',
            '3D Animation',
            'Video Editing',
            'Visual Effects',
            'Motion Graphics',
            'Logo Animation',
            'Character Animation',
            'Intro/Outro',
            'Animation Consultation',
         ]
      },
      {
         title: 'Marketing',
         list: [
            'Strategies',
            'Audit',
            'Content marketing',
            'SM marketing',
            'Analytics',
            'Researching',
            'Consulting',
            'PPC advertising',
            'Target Customers',
         ]
      },
   ]
  return (
    <section id="services" className="services">
      <div className="services__container">
         <h2 className="services__main-title">Our Services</h2>
         <p className="services__text">At Creedz, we’re here to bring your brand to life. Whether you need eye-catching graphics, a responsive website or effective marketing strategies. Our goal is to exceed your expectations and turn your vision into reality with creativity and expertise.</p>
         <div className="services__content">
            {
               services.map((item,i)=>{
                  return <div key={i} className="services__column">
                  <h3 className="services__title"><span className="services__title_num">{9 > i ? '0'+(i+1) : i+1}</span><span className="services__title_text">{item.title}</span></h3>
                  <div className="services__labels">
                     {
                        item.list.map((text,ind)=>{
                           return <div key={ind} className="services__label"><span>{text}</span></div>
                        })
                     }
                  </div>
               </div>
               })
            }
         </div>
      </div>
    </section>
  )
}