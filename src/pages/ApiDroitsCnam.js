import React from 'react';
import PropTypes from 'prop-types';

import { API_ICONS } from '../lib/api';

import Form from '../components/Form';
import Nav from '../components/Nav';
import TextSection from '../components/form-sections/TextSection';
import PreviousEnrollmentSection from '../components/form-sections/PreviousEnrollmentSection';
import OrganisationSection from '../components/form-sections/OrganisationSection';
import DescriptionSection from '../components/form-sections/DescriptionSection';
import CadreJuridiqueSection from '../components/form-sections/CadreJuridiqueSection';
import DonneesPersonnellesSection from '../components/form-sections/DonneesPersonnellesSection';
import MiseEnOeuvreSection from '../components/form-sections/MiseEnOeuvreSection';
import CguSection from '../components/form-sections/CguSection';

const DemarcheDescription = () => (
  <div className="text-quote">
    <p>
      Dans le cadre du programme « Dites-le nous une fois », visant à simplifier
      les démarches administratives des usagers, l’API Droits CNAM permet de
      récupérer des informations d'assurance maladie des usagers de façon à leur
      éviter la transmission d'information papier.
    </p>
    <p>
      Ce portail permet de faciliter le raccordement du téléservice des
      fournisseurs de service à l’API Droits CNAM.
    </p>
    <p>
      Pour faciliter votre racordement à l'API Droits CNAM, une{' '}
      <a
        href="https://github.com/assurance-maladie-digital/api-droits-fs-exemple-php"
        target="_blank"
        rel="noopener noreferrer"
      >
        API de test
      </a>{' '}
      est à votre disposition.
    </p>
  </div>
);

const ApiDroitsCnam = ({
  match: {
    params: { enrollmentId },
  },
}) => (
  <div className="dashboard">
    <Nav
      logo={{
        src: `/images/${API_ICONS.api_droits_cnam}`,
        alt: 'Caisse Nationale d’Assurance Maladie',
        url: 'https://www.ameli.fr/',
      }}
      navLinks={[
        { id: 'description', label: 'Description' },
        { id: 'cadre-juridique', label: 'Cadre juridique' },
        { id: 'donnees-personnelles', label: 'Données personnelles' },
        { id: 'contacts-moe', label: 'Mise en œuvre' },
        { id: 'cgu', label: "Modalités d'utilisation" },
      ]}
      contactInformation={[
        {
          email: 'contact@api.gouv.fr',
          label: 'Nous contacter',
          subject: 'Contact%20via%20signup.api.gouv.fr%20-%20CNAM',
        },
      ]}
    />
    <div className="main">
      <Form enrollmentId={enrollmentId} target_api="api_droits_cnam">
        <TextSection
          title="Demande d'accès à l'API Droits CNAM"
          Description={DemarcheDescription}
        />
        <PreviousEnrollmentSection />
        <OrganisationSection />
        <DescriptionSection />
        <CadreJuridiqueSection />
        <DonneesPersonnellesSection />
        <MiseEnOeuvreSection />
        <CguSection cguLink="/docs/API_Droits_CNAM_CGU_20181210.pdf" />
      </Form>
    </div>
  </div>
);

ApiDroitsCnam.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      enrollmentId: PropTypes.string,
    }),
  }),
};

ApiDroitsCnam.defaultProps = {
  match: {
    params: {
      enrollmentId: null,
    },
  },
};

export default ApiDroitsCnam;
