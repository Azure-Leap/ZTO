import React from 'react' 
const TestLoginAnimation = () => {
  return (
    <div>
<section className="containerNeflex">
    <input type="checkbox" id="replay"/>
    <label className= "Neflex --play">
        Play
        <div className="Neflex__sub">
            the animation
        </div>
    </label>
    <label  className="Neflex --reload">
        Reload
        <div className="Neflex__sub">
            click here to reset the animation
        </div>
    </label>

    <div>
        <div className="uno"></div>
        <div className="due"></div>
        <div className="tre"></div>
    </div>
</section>

    </div>
  )
}
export default TestLoginAnimation