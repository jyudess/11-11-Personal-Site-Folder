const Job = require('./models/job')
 
const job1 = new Job({
    company: 'VizExplorer70',
    role: 'Delivery Analyst',
    date: 'July 2019 - Jan 2020',
    description: 'VizExplorer is a software-based solutions provider for casinos and bars internationally',
    body: `•Configured proprietary applications using SQL to provide custom solutions to customers.
    •	Analyzed customer data to provide insights into data issues housed within their database in SSMS.
    •	Traveled on-site to the customer for final data validation and training for proprietary software. 
    •	Created documentation and recorded training videos for VizExplorer’s internal knowledge base.
    •	Identified and corrected front-end bugs within VizExplorer’s proprietary software. 
    `
  
});

const job2 = new Job({
    company: 'Southern California Safety Institute (SCSI)',
    role: 'Web Developer',
    date: 'Aug 2018 – Feb 2019',
    description: 'SCSI is a safety training center of excellence offering certificate programs to global leaders in aviation, oil, healthcare industries. ',
    body: `•Analyzed websites of best-of-breed competitors to recommend website improvements to differentiate the client.
    •	Formulated the content delivery model and structural improvements to align with the three-click rule.
    •	Designed wireframes and obtained client acceptance on website functionality; managed change requests. 
    •	Created the front-end design to optimize the customer experience and promote repeat business and loyal customers.
    •	Updated content to align with modern design standards and promote scalability. 
    `
});

const job3 = new Job({
    company: 'Business Consulting Group (BCG)',
    role: 'Data Analyst / Project Manager',
    date: 'Jan 2018 – Jun 2018',
    description: 'BCG is a recognized student organization providing services in business management, research, consultancy and analysis. ',
    body: `•Analyzed product performance for net profit to revenue ratio, labor to revenue ratio, operating revenue ratio, fixed to variable ratio and costs of goods sold (COGS) to highlight categories of revenue generation. 
    •	Consulting services to organize and prepare financial information for MetroPCS for buyout consideration.
    •	Created dataset from unstructured sales receipt data to identify patterns and trends. 
    `
});

const job4 = new Job({
    company: 'Business Consulting Group (BCG)',
    role: 'Associate Data Analyst',
    date: 'Jan 2017 – Dec 2017',
    description: 'BCG is a recognized student organization providing services in business management, research, consultancy and analysis. ',
    body: `Delivered a feasibility study for a multi-hotel, multi-million-dollar initiative for Hilton and SpringHill Suites.
    •	Compiled and presented supply and demand analysis to senior leadership for San Luis Obispo hotel room occupancy.
    •	Partnered with client to prepare a financial report in support of a loan to secure funding. 
    •	Evaluated marketplace demand for hotel amenities and recommended popular services related to demand. 
    •	Compiled financial income and expense forecasts using a fixed and variable component model. 
    •	Analyzed annual changes in Revenue per Available Room (REVPAR) and Average Daily Rate (ADR) for a national trend overview.             
     
    `
});

exports.job1 = job1;
exports.job2 = job2;
exports.job3 = job3;
exports.job4 = job4;