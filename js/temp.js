function getTeam() {
  return [
    {
      name: 'Sach Samala',
      title: 'President',
      linkedinURL: 'https://www.linkedin.com/in/sach-samala/',
      avatarURL: '../img/2018/sach_samala.jpeg'
    },
    {
      name: 'Mohammad Sadoghi',
      title: 'Professor/Advisor',
      linkedinURL: 'https://www.linkedin.com/in/mohammad-sadoghi-b842a27/',
      avatarURL: '../img/2018/mohammad_sadoghi.jpeg'
    },
    {
      name: 'Ana Mehta',
      title: 'Head of Marketing',
      linkedinURL: 'https://www.linkedin.com/in/ana-mehta-630a52121/',
      avatarURL: '../img/2018/ana_mehta.jpeg'
    },
    {
      name: 'Samarth Sandeep',
      title: 'Chief Technology Officer',
      linkedinURL: 'https://www.linkedin.com/in/samarth-sandeep-81a02487/',
      avatarURL: '../img/2018/samarth_sandeep.jpeg'
    },
    {
      name: 'Andreas Godderis',
      title: 'Head of Operations Outreach',
      linkedinURL: 'https://www.linkedin.com/in/andreas-g-601262119/',
      avatarURL: '../img/2018/andreas_godderis.jpeg'
    },
    {
      name: 'Tommy Saechao',
      title: 'Outreach',
      linkedinURL: 'https://www.linkedin.com/in/tommy-saechao/',
      avatarURL: '../img/2018/tommy_saechao.jpeg'
    },
    {
      name: 'Marcus Chan',
      title: 'Outreach',
      linkedinURL: 'https://www.linkedin.com/in/marcus-chan-7837a2116/',
      avatarURL: '../img/2018/marcus_chan.jpeg'
    }
  ];
}

function Member({ name, title, linkedinURL, avatarURL }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1em',
        width: '18rem',
        margin: '.5rem'
      }}>
      <img
        style={{ borderRadius: '100%', width: 139, height: 139 }}
        src={avatarURL}
        alt={`${name}'s picture`}
        className="card-img-top shadow"
      />
      <div className="card-body" style={{ textAlign: 'center' }}>
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle">{title}</h6>
        <a
          className="btn btn-default"
          href={linkedinURL}
          target="_BLANK"
          rel="noreferrer noopener">
          Contact
        </a>
      </div>
    </div>
  );
}

function Team(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '1em 0'
      }}>
      <h2 style={{ fontSize: '3em', margin: '1em 0' }}>Team</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '0 1em'
        }}>
        {getTeam().map(member => (
          <Member key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}