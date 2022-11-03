import ContentItem from "./ContentItem";

function Content(props) {

    return (
        <>
            <main>
                <div className="background">
                    <div className="container">
                        <div className="content-heading">
                            <h1>Portfolio</h1>
                            <h2>Recent Work</h2>
                        </div>
                        <div className="content-grid" /* style={{height: "100px", backgroundColor: "red"}} */>
                            <ContentItem image="./src/assets/field.webp" title="Project Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur ipsa omnis recusandae. Voluptates quidem odio illum debitis? Dolor excepturi, soluta nesciunt corrupti laboriosam fugit laborum quasi aspernatur cumque nostrum!" />
                            <ContentItem image="./src/assets/lake.webp" title="Project Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur ipsa omnis recusandae. Voluptates quidem odio illum debitis? Dolor excepturi, soluta nesciunt corrupti laboriosam fugit laborum quasi aspernatur cumque nostrum!" />
                            <ContentItem image="./src/assets/northern.webp" title="Project Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur ipsa omnis recusandae. Voluptates quidem odio illum debitis? Dolor excepturi, soluta nesciunt corrupti laboriosam fugit laborum quasi aspernatur cumque nostrum!" />
                            <ContentItem image="./src/assets/ricefield.webp" title="Project Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur ipsa omnis recusandae. Voluptates quidem odio illum debitis? Dolor excepturi, soluta nesciunt corrupti laboriosam fugit laborum quasi aspernatur cumque nostrum!" />
                            <ContentItem image="./src/assets/savanna.webp" title="Project Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur ipsa omnis recusandae. Voluptates quidem odio illum debitis? Dolor excepturi, soluta nesciunt corrupti laboriosam fugit laborum quasi aspernatur cumque nostrum!" />
                            <ContentItem image="./src/assets/seacastle.webp" title="Project Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur ipsa omnis recusandae. Voluptates quidem odio illum debitis? Dolor excepturi, soluta nesciunt corrupti laboriosam fugit laborum quasi aspernatur cumque nostrum!" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Content;