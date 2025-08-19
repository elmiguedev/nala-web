'use client'

import { usePetContext } from "../petContext/PetContext";

interface PetDashboardProps {
}

export default function PetDashboard(props: PetDashboardProps) {

  const pet = usePetContext();

  return (
    <div>
      <h1>pet dashboard</h1>
      <div className="columns">
        <div className="column">
          <a href={`/pets/${pet?.id}/card`}>
            card
          </a>
        </div>
        <div className="column">
          <a href={`/pets/${pet?.id}/diary`}>
            diary
          </a>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <a href={`/pets/${pet?.id}/location`}>
            location
          </a>
        </div>
        <div className="column">
          <a href={`/pets/${pet?.id}/health`}>
            health
          </a>
        </div>
      </div>
    </div>
  );
}