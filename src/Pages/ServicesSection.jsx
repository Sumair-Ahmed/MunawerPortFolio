import React , {useState} from 'react'
import ServicesSectionData from "../Data/ServiceSectionData.json"
import ThemeChange from '../componet/ThemeChange';
import ServiceCard from '../componet/ServiceCard';
import SecondLoading from '../componet/SecondLoading';

function ServicesSection() {
      const [spinner, setSpinner] = useState(true);
    return (
        <>    
       <SecondLoading setSpinner={setSpinner} spinner={spinner} />
        <section className={"service section " + ((spinner === true) ? 'Hide' : '')} >
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className='row'>
                    <ServiceCard list={ServicesSectionData.Service_Card} />
                </div>
            </div>
            <ThemeChange />
        </section>
        </>
    )
}

export default ServicesSection