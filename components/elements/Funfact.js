import React from 'react';
import CounterUp from '../elements/CounterUp';

const Funfact = () => {

    const Funfactdata = [
        {
            icon: "business-060-graph",        
            count: "255",
            title: "Project Complete",
        },
        {
            icon: "business-035-helpline",        
            count: "8700",
            title: "HAPPY CLIENTS",
        },
        {
            icon: "business-020-hierarchy",
            count: "530",
            title: "AWWORD WINGING",
        },
        {
            icon: "business-048-coin",        
            count: "125",
            title: "COMPANY TEAM",
        },
    ];

    return (
        <>
            {Funfactdata.map((item, CounterBlock) => (
                <div key={CounterBlock} className="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
                    <div className="inner">
                        <i className={`icon flaticon-${item.icon}`} />
                        <div className="count-box"><span className="count-text"><CounterUp end={item.count} /></span></div>
                        <span className="counter-title">{item.title}</span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Funfact;