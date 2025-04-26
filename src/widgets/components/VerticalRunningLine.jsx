
export default function VerticalRunningLine({direction,projects}) {

   const getRotation = (index) => {
      const rotations = [15, 30, 15, -15,-30,-15];
      return rotations[index % rotations.length];
   };
   const getPadding = (index) => {
      const padding = [0,100,200,100];
      return padding[index % padding.length];
   };
  return (
   <div className={`running-line${direction ? direction : ''}`}>
      <div className="running-line__wrapper">
      {
         projects.map((item,i)=>{
            return <div className='running-line__items' key={i} style={{ transform: `rotate(${getRotation(i)}deg) translateX(${direction ? -getPadding(i) : getPadding(i)}px)`}}>
               {item.Video ? <video loop muted autoPlay playsInline src={item.Video}></video> : <img width={500} height={300} src={item.Picture} alt="Poster" />}
            </div>
         })
      }
      </div>
      <div className="running-line__wrapper">
      {
         projects.map((item,i)=>{
            return <div className='running-line__items' key={i}
                     style={{ transform: `rotate(${getRotation(i)}deg) translateX(${direction ? -getPadding(i) : getPadding(i)}px)`}}
                     >
               {item.Video ? <video loop muted autoPlay playsInline src={item.Video}></video> : <img width={500} height={300} src={item.Picture} alt="Poster" />}
            </div>
         })
      }
      </div>
   </div>
  )
}