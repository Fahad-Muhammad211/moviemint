import React from 'react';
import './ManagmentTeam.css';

const managementTeamMembers = [
  {
    name: 'John Doe',
    image: '/images/about1.jpeg',
    designation: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis sapien tincidunt mattis. Nulla facilisi.'
  },
  {
    name: 'Jane Smith',
    image: '/images/about2.jpeg',

    designation: 'CTO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis sapien tincidunt mattis. Nulla facilisi.'
  },
  {
    name: 'Alice Johnson',
    image: '/images/about3.jpeg',

    designation: 'COO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis sapien tincidunt mattis. Nulla facilisi.'
  },
  {
    name: 'David Brown',
    image: '/images/about4.jpeg',

    designation: 'CFO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis sapien tincidunt mattis. Nulla facilisi.'
  },
  {
    name: 'Emily Davis',
    image: '/images/about3.jpeg',

    designation: 'CMO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis sapien tincidunt mattis. Nulla facilisi.'
  },
  {
    name: 'Michael Wilson',
    image: '/images/about6.jpeg',

    designation: 'CTO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis sapien tincidunt mattis. Nulla facilisi.'
  },
  {
    name: 'Sophia White',
    image: '/images/about7.jpeg',
    designation: 'HR Head',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis sapien tincidunt mattis. Nulla facilisi.'
  }
];
function ManagmentTeam() {
    return (
      <div className='bg-clr'>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2 className='h2-about'>Management Team <span className='text-white'>Driven By Doers</span></h2>
              <p className='p2-about'>Our leadership team combines rare expertise across filmmaking, technology, business and regulation to turn bold <br />
                ambitions into executed realities. Meet the guiding forces at the helm.</p>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center">
              {managementTeamMembers.map((member, index) => (
                <div key={index} className="col-md-2 m-3">
                  <div className="about-card">
                    <img src={member.image} className="card-img-top" alt={member.name} />
                    <div className="card-body">
                      <h5 className="card-title">{member.name}</h5>
                      <h6 className="card-subtitle mb-2 text-white"> <span className='designation'>Designation:</span>{member.designation}</h6>
                      <p className="card-text text-white"> <span className='Quick Bio'>Designation:</span> {member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ManagmentTeam;