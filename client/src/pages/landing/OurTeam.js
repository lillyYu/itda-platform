import { memo } from 'react';

import SectionTitle from 'components/elements/SectionTitle';

import 'scss/pages/landing/our-team.scss';
import profiles from 'data/our-team.json';

const OurTeam = ({ sections }) => {
  return (
    <section className="our-team" ref={(el) => (sections.current[3] = el)}>
      <div className="our-team-wrap">
        <SectionTitle title="OUR TEAM" />

        <article>
          <ul>
            {profiles.map((profile) => {
              return (
                <li>
                  <div>
                    <figure>
                      <img src={profile.image} alt={`${profile.name} 프로필`} />
                    </figure>
                    <span>{profile.name}</span>
                  </div>
                  <p>{profile.position}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default memo(OurTeam);
