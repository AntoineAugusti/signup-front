import React from 'react';
import PropTypes from 'prop-types';

import ActivityFeed from '../../components/form/ActivityFeed';

const ActivityFeedWrapper = ({
  averageProcessingTimeInDays,
  status,
  events,
}) => {
  if (status === 'modification_pending') {
    return (
      <div className="notification warning">
        Votre demande ne peut être validée en l’état.
        <div style={{ margin: '1em 0' }}>
          Merci d’effectuer les modifications demandés :
          {events.length > 0 && <ActivityFeed events={events} />}
        </div>
      </div>
    );
  }

  if (averageProcessingTimeInDays > 0) {
    return (
      <div className="notification">
        Le temps traitement moyen constaté est de{' '}
        <b>{averageProcessingTimeInDays} jours</b>.
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className="notification">
        <p>Votre demande est actuellement en cours d’édition.</p>
        <p>
          Vous pouvez soumettre cette demande à tout moment en cliquant sur le
          bouton "Soumettre la demande" en bas du formulaire.
        </p>
      </div>
    );
  }

  return null;
};

ActivityFeedWrapper.propTypes = {
  averageProcessingTimeInDays: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
};

export default ActivityFeedWrapper;
