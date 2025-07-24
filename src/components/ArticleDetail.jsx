import AdCard from "./AdCard";

export default function ArticleDetail() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* SECTION 1 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        1. La montée en puissance du véhicule électrique
      </h4>
      <p className="mb-4 text-left sm:text-justify sm:text-lg leading-relaxed ">
        La transition vers la propulsion électrique s’accélère. Batteries plus
        performantes, infrastructures de recharge en expansion, et incitations
        gouvernementales favorisent une adoption massive. Tesla, pionnier du
        genre, a été rejoint par des géants comme Volkswagen, Hyundai ou
        Renault, qui multiplient les modèles électriques.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        L’avenir pourrait passer par les batteries solides, plus sûres et plus
        durables, tout en offrant une plus grande autonomie. Mais
        l’électrification soulève aussi des enjeux : disponibilité des matériaux
        rares, recyclage des batteries, et adaptation du réseau électrique.
      </p>

      {/* SECTION 2 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        2. L’automatisation de la conduite progresse
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        La voiture autonome, longtemps perçue comme futuriste, devient
        progressivement réalité. De nombreux véhicules proposent déjà des
        fonctions d’aide à la conduite : régulateur adaptatif, freinage
        automatique, maintien dans la voie.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Certains modèles atteignent même un niveau 3 d’autonomie, où le
        conducteur peut lâcher le volant dans certaines conditions. Des
        entreprises comme Waymo, Tesla ou Mercedes développent des systèmes plus
        avancés, même si la généralisation d’une autonomie complète reste
        freinée par des enjeux réglementaires, éthiques et techniques.
      </p>

      {/* SECTION 3 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        3. Une connectivité de plus en plus poussée
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Les voitures sont désormais connectées à internet, à leur environnement,
        et parfois entre elles. Cette connectivité permet des mises à jour à
        distance, une navigation intelligente, des alertes de maintenance, ou
        encore l’intégration avec les smartphones.
      </p>

      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        La 5G renforce cette tendance, rendant possible la communication en
        temps réel avec les infrastructures routières. Mais elle soulève aussi
        des questions de sécurité informatique et de confidentialité des
        données.
      </p>

      {/* === PUBLICITÉ === */}
      <div className="flex justify-center my-10">
        <AdCard />
      </div>

      {/* SECTION 4 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        4. L’intelligence artificielle au cœur de l’expérience
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        L’IA est omniprésente : dans la reconnaissance vocale, la gestion de
        l’énergie, l’analyse des comportements routiers ou l’optimisation de la
        conduite. Elle rend les véhicules plus sûrs, plus intelligents, et plus
        personnalisés.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Certaines marques proposent même des assistants embarqués capables de
        s’adapter aux habitudes du conducteur, de prévoir les trajets ou de
        recommander un itinéraire selon la météo ou l’état du trafic.
      </p>

      {/* SECTION 5 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        5. Des matériaux et procédés de fabrication plus durables
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        L’innovation ne concerne pas que l’électronique. Légèreté, recyclabilité
        et performance guident le choix des matériaux : aluminium, composites,
        fibres naturelles. L’impression 3D est de plus en plus utilisée, tout
        comme les robots collaboratifs sur les lignes de production.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Cette modernisation vise à rendre les véhicules plus économes en énergie
        tout en réduisant leur empreinte écologique.
      </p>

      {/* SECTION 6 */}
      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        6. Vers une mobilité servicielle
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Enfin, un changement majeur s’opère dans notre rapport à la voiture.
        Avec l’essor des plateformes numériques, la propriété laisse place à
        l’usage : autopartage, location à la demande, abonnements flexibles.
      </p>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        Ce modèle de &quot;voiture comme service&quot; répond aux besoins
        urbains, tout en réduisant la congestion et les émissions.
      </p>

      <h4 className="font-bold text-2xl mt-6 mb-2 border-l-4 border-blue-600 pl-3">
        🔄 Un secteur en pleine mutation
      </h4>
      <p className="mb-4 text-left sm:text-justify text-sm sm:text-lg leading-relaxed">
        L’automobile ne se contente plus d’avancer sur quatre roues : elle
        devient intelligente, connectée, propre et intégrée dans un écosystème
        global de mobilité. À l’horizon 2030, la voiture telle que nous la
        connaissons aujourd’hui pourrait bien n’être qu’un lointain souvenir.
      </p>
    </div>
  );
}
