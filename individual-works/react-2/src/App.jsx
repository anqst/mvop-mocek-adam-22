import Card from './Card';
import CardDynamic from './CardDynamic';

function App() {

    return (
        <div className='app'>
            <Card />
            <CardDynamic
                name={"Bunkry yo"}
                description={"It is old, but website."}
                link={
                    {"name": "Check it out",
                    "address": "https://ropiky.net"}
                } />
            <CardDynamic
                name={"Já už nevím co sem mám dát"}
                description={"tak sem dám tohle"}
                link={
                    {"name": "definitely a good site, right?",
                    "address": "https://4chan.org"}
                } />
            <CardDynamic
                name={"Toto je lepší ale"}
                description={"Protože ratio"}
                link={
                    {"name": "Let's reddit!",
                    "address": "https://reddit.com"}
                } />
            <CardDynamic
                name={"Toto ale ne pls"}
                description={"Moc ratia"}
                link={
                    {"name": "Neklikat.",
                    "address": "https://twitter.com"}
                } />
        </div>
    );
}

export default App;