import React from 'react';
import { Container } from 'react-bootstrap';

export default function ParagraphWithIcons() {
  const paragraphData = [
    {
      title: 'Using Abstract',
      content: 'Abstract lets you manage, version, and document your designs in one place.',
      icon: '🌟',
    },
    {
      title: 'Manage organizations, teams, and projects',
      content: 'Use Abstract organizations, teams, and projects to organize your people and your work..',
      icon: '🚀',
    },
    {
      title: 'Authenticate to Abstract',
      content: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
      icon: '🌍',
    },
    {
      title: 'Manage your account',
      content: 'Get in touch with a human..',
      icon: '✔',
    },
    {
      title: 'Abstract support',
      content: 'Configure your account settings, such as your email, profile details, and password.',
      icon: '🤖',
    },
    {
      title: 'Manage billing',
      content: 'Change subscriptions and payment details..',
      icon: '🧠',
    },
  ];

  return (
    <Container style={{ width: '80%', display: 'flex', justifyContent: 'space-between', margin: 'auto', padding: '130px' }}>
      <div style={{ width: '40%', marginRight:'80px' }}>
        {paragraphData.slice(0, 3).map((data, index) => (
          <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: '2em', marginRight: '20px' }}>{data.icon}</div>
            <div>
            <h3 style={{ textAlign: 'left' }}><strong>{data.title}</strong></h3>

              <p style={{ textAlign: 'left' }}>{data.content}</p>
              <a href="#learn-more" style={{ textAlign: 'left' }}>Learn More →</a>

            </div>
          </div>
        ))}
      </div>

      <div style={{ width: '40%',  marginLeft:'80px' }}>
        {paragraphData.slice(3).map((data, index) => (
          <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: '2em', marginRight: '20px' }}>{data.icon}</div>
            <div>
            <h3 style={{ textAlign: 'left' }}><strong>{data.title}</strong></h3>
              <p style={{ textAlign: 'left' }}>{data.content}</p>
              <a href="#learn-more" id="learn-more-link" >Learn More →</a>


            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
