import React , {useState} from 'react'
import TestimonialCard from '../componet/TestimonialCard';
import ThemeChange from '../componet/ThemeChange';
import TestimonialSectionData from '../Data/TestminoialSectionData.json'
import SecondLoading from '../componet/SecondLoading';

function TestimonialSection() {
    const [spinner, setSpinner] = useState(true);
    return (
        <>    
       <SecondLoading setSpinner={setSpinner} spinner={spinner} />
        <section className={"testimonial section "  + ((spinner === true) ? 'Hide' : '')}>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Testimonial</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='testimonial-heading padd-15'>
                        <h2>Trust our customer</h2>
                    </div>
                </div>
                <div className='row'>
                        <TestimonialCard list={TestimonialSectionData.Testminoial} />
                </div>
            </div>
            <ThemeChange   />
        </section>
        </>
    )
}

export default TestimonialSection