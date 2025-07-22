import AdCard from "./AdCard";

export default function ArticleDetail() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-center text-xl font-bold text-red-600 uppercase mb-4 py-2">
        Thème : Innovation Technologique/Automobile
      </h1>

      <h3 className="text-lg font-semibold mb-1">
        🚗 Les innovations technologiques qui redéfinissent l’industrie automobile
      </h3>

      <p className="italic text-gray-600 mb-6">
        Par [Nom du média] — Juillet 2025
      </p>

      <p className="mb-4">
        L’industrie automobile vit une transformation rapide, portée par les défis climatiques, les
attentes des consommateurs et l’essor du numérique. À la croisée de l’ingénierie, de
l’intelligence artificielle et des services connectés, la voiture devient un concentré de
technologie. Tour d’horizon des principales innovations qui redéfinissent la mobilité.
      </p>

      {/* SECTION 1 */}
      <h4 className="font-bold text-lg mt-6 mb-2">1. La montée en puissance du véhicule électrique</h4>
      <p className="mb-4">
        La transition vers la propulsion électrique s’accélère. Batteries plus performantes,
infrastructures de recharge en expansion, et incitations gouvernementales favorisent une
adoption massive. Tesla, pionnier du genre, a été rejoint par des géants comme Volkswagen,
Hyundai ou Renault, qui multiplient les modèles électriques.
      </p>
      <p className="mb-4">
        L’avenir pourrait passer par les batteries solides, plus sûres et plus durables, tout en offrant
une plus grande autonomie. Mais l’électrification soulève aussi des enjeux : disponibilité des
matériaux rares, recyclage des batteries, et adaptation du réseau électrique.
      </p>

      {/* SECTION 2 */}
      <h4 className="font-bold text-lg mt-6 mb-2">2. L’automatisation de la conduite progresse</h4>
      <p className="mb-4">
        La voiture autonome, longtemps perçue comme futuriste, devient progressivement réalité. De
nombreux véhicules proposent déjà des fonctions d’aide à la conduite : régulateur adaptatif,
freinage automatique, maintien dans la voie.
      </p>
      <p className="mb-4">
        Certains modèles atteignent même un niveau 3 d’autonomie, où le conducteur peut lâcher le
volant dans certaines conditions. Des entreprises comme Waymo, Tesla ou Mercedes
développent des systèmes plus avancés, même si la généralisation d’une autonomie complète
reste freinée par des enjeux réglementaires, éthiques et techniques.
      </p>

      {/* SECTION 3 */}
      <h4 className="font-bold text-lg mt-6 mb-2">3. Une connectivité de plus en plus poussée</h4>
      <p className="mb-4">Les voitures sont désormais connectées à internet, à leur environnement, et parfois entre elles.
        Cette connectivité permet des mises à jour à distance, une navigation intelligente, des alertes
        de maintenance, ou encore l’intégration avec les smartphones.</p>

        <p className="mb-4">La 5G renforce cette tendance, rendant possible la communication en temps réel avec les
infrastructures routières. Mais elle soulève aussi des questions de sécurité informatique et de
confidentialité des données.</p>

      {/* === PUBLICITÉ === */}
      <div className="flex justify-center my-10">
        <AdCard />
      </div>

      {/* SECTION 4 */}
      <h4 className="font-bold text-lg mt-6 mb-2">4. L’intelligence artificielle au cœur de l’expérience</h4>
      <p className="mb-4">
        L’IA est omniprésente : dans la reconnaissance vocale, la gestion de l’énergie, l’analyse des
comportements routiers ou l’optimisation de la conduite. Elle rend les véhicules plus sûrs,
plus intelligents, et plus personnalisés.
      </p>
      <p className="mb-4">
        Certaines marques proposent même des assistants embarqués capables de s’adapter aux
habitudes du conducteur, de prévoir les trajets ou de recommander un itinéraire selon la météo
ou l’état du trafic.
      </p>

      {/* SECTION 5 */}
      <h4 className="font-bold text-lg mt-6 mb-2">5. Des matériaux et procédés de fabrication plus durables</h4>
      <p className="mb-4">
       L’innovation ne concerne pas que l’électronique. Légèreté, recyclabilité et performance
guident le choix des matériaux : aluminium, composites, fibres naturelles. L’impression 3D
est de plus en plus utilisée, tout comme les robots collaboratifs sur les lignes de production.
      </p>
      <p className="mb-4">
        Cette modernisation vise à rendre les véhicules plus économes en énergie tout en réduisant
leur empreinte écologique.
      </p>

      {/* SECTION 6 */}
      <h4 className="font-bold text-lg mt-6 mb-2">6. Vers une mobilité servicielle</h4>
      <p className="mb-4">
       Enfin, un changement majeur s’opère dans notre rapport à la voiture. Avec l’essor des
plateformes numériques, la propriété laisse place à l’usage : autopartage, location à la
demande, abonnements flexibles.
      </p>
      <p className="mb-4">Ce modèle de &quot;voiture comme service&quot; répond aux besoins urbains, tout en réduisant la
congestion et les émissions.</p>

<h4 className="font-bold text-lg mt-6 mb-2">�� Un secteur en pleine mutation</h4>
<p className="mb-4">L’automobile ne se contente plus d’avancer sur quatre roues : elle devient intelligente,
connectée, propre et intégrée dans un écosystème global de mobilité. À l’horizon 2030, la
voiture telle que nous la connaissons aujourd’hui pourrait bien n’être qu’un lointain souvenir.</p>
    </div>
  );
}
