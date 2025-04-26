import { LogoRight } from "../../shared/icons/icons"
import {Step1,Step2,Step3} from "../../shared/icons/AnimatedIcons"

export default function Process() {
   const steps = [
      {
         labelText: 'Step 1',
         icon: <Step1 />,
         title: 'Set your Preferences',
         text: "Share your vision for design, development, or marketing. Outline your style and goals to tailor our services to your needs.",
      },
      {
         labelText: 'Step 2',
         icon: <Step2 />,
         title: 'Let AI do the work',
         text: "Sit back and relax while we transform your preferences into creative, impactful solutions designed for you.",
      },
      {
         labelText: 'Step 3',
         icon: <Step3 />,
         title: 'Review and be happy',
         text: "Review the results and let us know your thoughts. We're committed to perfecting the details to meet your standards.",
      },
   ]
   const tools = [
      'Flexible payments',
      'Trello or Jira for tasks',
      'Slack or Telegram for chat',
      'Designed in Adobe CC and Figma',
   ]
  return (
    <section id="process" className='process'>
      <div className="process__container">
         <div className="process__row process-steps">
            {
               steps.map((item,i)=>{
                  return   <div key={i} className="process__column">
                  <div className="process__label"><i>{item.icon}</i><span className="process__label_text">Step</span><span className="process__label_num">{i+1}</span></div>
                  <h2 className="process__title">{item.title}</h2>
                  <p className="process__text">{item.text}</p>
               </div>
               })
            }
         </div>
         <div className="process__row process-tools">
            <div className="process-tools__top">
               <h3 className="process-tools__title"><span className="process-tools__title_text">Tools we use</span><span className="process-tools__title_line"></span></h3>
            </div>
            <div className="process-tools__row">
               {
                  tools.map((item,i)=>{
                     return <div key={i} className="process-tools__label">{LogoRight}<span>{item}</span></div>
                  })
               }
            </div>
         </div>
      </div>
    </section>
  )
}
