import { TwitterFollowCard } from "./TwitterFollowCard"





export const TwitterComponentApp = ({api}) => {

    return (
        <section className='App'>
            <div className="twCard-Div">
                <h3>Who to follow</h3>
                {
                    api.map((data) => (
                        <TwitterFollowCard
                            key={data.login.uuid}
                            userName={data.login.username}
                            name={data.name.first}
                            photo={data.picture.large}
                     
                        />

                    ))
                }

                <a href="">Show more</a>


            </div>
        </section>
    )
}

export default TwitterComponentApp
