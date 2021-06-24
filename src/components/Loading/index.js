import "./style.css"
export default function Loading({ message }) {
    return (
        <div className="loading">
            <div>
                <div className="lds-ring">
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}