import React from 'react'


const Step3 = ({setStep, obj, setObj, submit, errorHandle, setErrorHandle}) => {

    const next = (e) => {
        e.preventDefault()
        if(obj.education.length === 0 || obj.availability.length === 0) {
            for(let key in obj) {
                if(key === 'education' || key === 'availability') {
                    if(obj[key].length === 0) {
                        setErrorHandle(errorHandle => ({...errorHandle, [key]: true}))
                    }
                }
            }
        } else {
            submit()
        }
    }

    const changeHandler = e => {
        setObj({...obj, [e.target.name]: e.target.value})
    }

    return (
        <div className='second-page'>
            <h2 className='title'>Getting to know you more</h2>
            <form>
                <h4>Please list below your education.</h4>
                <textarea 
                    style={{marginBottom: errorHandle.education && '0'}}
                    onChange={changeHandler} 
                    value={obj.education} 
                    name='education'
                    className='page-two-text-area margin' 
                    onClick={() => setErrorHandle({...errorHandle, education: false})}
                />
                {errorHandle.education && <p className='application-error margin'>Please provide information.</p>}
                <h4>Availability is critical to successfully completing apprenticeship. Would you be available for more than 90% of the time dedicated to project(s)? If not, please provide any dates you would need time off.</h4>
                <textarea 
                    onClick={() => setErrorHandle({...errorHandle, availability: false})}
                    style={{marginBottom: errorHandle.availability && '0'}}
                    onChange={changeHandler} 
                    value={obj.availability} 
                    name='availability' 
                    className='page-two-text-area margin'
                />
                {errorHandle.availability && <p className='application-error margin'>This field cannot be empty.</p>}
                <h4 className='email-text'>Please email your resume/curriculum vitae to projects.apply@revitalize.com</h4>
                <div className='button-container two'>
                    <button onClick={() => setStep(2)}>&larr; Back</button>
                    <button onClick={next}>Submit &#10003;</button>
                </div>
            </form>
        </div>
    )
}

export default Step3