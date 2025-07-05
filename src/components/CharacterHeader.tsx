import "../styles/CharacterHeader.css"

const charName: String = "Character Name"

export default function CharacterHeader() {
    return (
        <div className="char-container">
            <div className="char-row">
                <h1 className="flex-item">{charName}</h1>
            </div>
            <div className="char-row">
                <div className="left">
                    <h2 className="flex-item">Class LVL</h2>
                </div>
                <div className="right">
                    <h2 className="flex-item">Armor Class</h2>
                    <h2 className="flex-item">Attack Bonus</h2>
                    <h2 className="flex-item">Spell Bonus</h2>
                    <h2 className="flex-item">Spell Save DC</h2>
                </div>
            </div>
        </div>
    )
}