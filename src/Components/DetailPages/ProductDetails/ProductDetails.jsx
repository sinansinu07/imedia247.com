import "./ProductDetails.scss"

import image1 from "../../../Assets/Products/1/base-jack.png"
import image2 from "../../../Assets/Products/1/ledger.jpg"
import image3 from "../../../Assets/Products/1/standard.jpg"
import image4 from "../../../Assets/Products/1/transom.jpg"
import image5 from "../../../Assets/Products/1/bolt-nut.jpg"
import image6 from "../../../Assets/Products/1/spigotwithwasher.jpg"
import image7 from "../../../Assets/Products/1/cantilever.jpg"
import image8 from "../../../Assets/Products/1/ladder-beams.jpg"
import image9 from "../../../Assets/Products/1/beam-bracket.jpg"
import image10 from "../../../Assets/Products/1/jack.png"
import image11 from "../../../Assets/Products/1/u-head.png"
import image12 from "../../../Assets/Products/1/fixed-u-head.jpg"
import image13 from "../../../Assets/Products/1/socket-base.jpg"
import image14 from "../../../Assets/Products/1/drop-head.jpg"
import image15 from "../../../Assets/Products/1/decking-beam.jpg"

const productNew = [
    {
        id: 1,
        name: "Cuplock - Base Jack",
        image: image1,
        description: "The pipe is of Hot Rolled Steel as per BS-1139 Standard, The Jack Nut of SG Iron Castings. Made from pipe of 38mm OD X 650mm Height."
    },
    {
        id: 2,
        name: "Cuplock - Ledger",
        image: image2,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard. Made from Pipe of 48mm OD, 4mm or 3.2mm."
    },
    {
        id: 3,
        name: "Cuplock – Standard",
        image: image3,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard.Made from Pipe of 48 mm OD, 4 mm or 3.2 mm"
    },
    {
        id: 4,
        name: "Cuplock Intermediate Transom",
        image: image4,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard.Made from Pipe of 48mm OD, 4mm or 3.2mm"
    },
    {
        id: 5,
        name: "Cuplock - Spigot Pin with Bolt & Nut",
        image: image5,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard .Made from Pipe of 38mm OD X 4mm and height is 300mm, Available with a pair of Bolts and Nuts."
    },
    {
        id: 6,
        name: "Cuplock - Spigot Pin with Washer",
        image: image6,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard. Made from Pipe of 38mm X 4mm and Height of 300mm and a washer is welded at the center."
    },
    {
        id: 7,
        name: "Cuplock- Cantilever A Frame",
        image: image7,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard. Made from 48.3mm X 3.2mm pipe."
    },
    {
        id: 8,
        name: "Ladder Beam",
        image: image8,
        description: "Hot dipped, galvanized, painted ladder beam made of pipe of diameter 48.3 mm with thickness 3mm to 4 mm.Available in 6 m."
    },
    {
        id: 9,
        name: "Cuplock - Beam Bracket",
        image: image9,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard.Made from 48.3mm X 3.2mm pipe."
    },
    {
        id: 10,
        name: "Universal Jack",
        image: image10,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard. Made from 38mm X 4mm pipe, 650mm length."
    },
    {
        id: 11,
        name: "Adjustable U head",
        image: image11,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard. Made from 38mm X 4mm pipe, 650mm length."
    },
    {
        id: 12,
        name: "Fixed U Head",
        image: image12,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard. Made from 38mm X 4mm pipe, 100mm length."
    },
    {
        id: 13,
        name: "Socket Base",
        image: image13,
        description: "The Pipe of Hot Rolled Steel as per BS-1139 Standard. Made from 48.3mm X 3.2mm pipe, the height is 100mm."
    },
    {
        id: 14,
        name: "Drop Head",
        image: image14,
        description: "The Main component of the Decking System, used over each standard with a socket adoptor. Made from Sheeted components, The Critical Height is 70mm."
    },
    {
        id: 15,
        name: "Decking Beam",
        image: image15,
        description: "The Primary Beam that is used with the Drop Head to form the Decking System. Made from Sheeted components, used with Drop head, the sheet thickness is 3mm."
    },

]

export default function ProductDetails({product}) {
    return (
        <section>
            <div className="product-detail-section section-container">
                <div className="head-section-div">
                    <div className="head-div">
                        <div className="head-top">
                            <hr className="head-top-hr"/>
                            <h3 className="top-title">{product.name}</h3>
                        </div>
                        <h1 className="main-title">Why Choose Our <span className="color">{product.name}</span> Product?</h1>
                    </div>
                    <p>{product.description}</p>
                </div>
                <div className="product-details-container">
                    <div className="products-details-points">
                        <li>
                            Our top-tier couplers and fittings meet the highest standards, prioritizing worker safety and ensuring your scaffolding remains secure throughout the project.
                        </li>
                        <li>
                            Built with premium steel and aluminum, Quaddream couplers offer exceptional strength and durability, withstanding even the toughest construction environments.
                        </li>
                        <li>
                            We offer a comprehensive range of couplers and fittings, including right-angle for corners, swivel for flexibility, and everything in between. Find the perfect solution for any scaffolding configuration, from basic to complex.
                        </li>
                        <li>
                            Focus on getting the job done with confidence. Quaddream’s best-in-class couplers guarantee a rock-solid scaffolding system, allowing your team to work efficiently and safely.
                        </li>
                    </div>
                    <div className="product-details-grid">
  {productNew.map((ele) => (
    <div key={ele.id} className="product-card">
      <div className="product-image">
        <img src={ele.image} alt={ele.name} />
      </div>
      <h1 className="product-name-static">{ele.name}</h1> {/* Initially visible title */}
      <div className="product-details">
        <h1 className="product-name">{ele.name}</h1> {/* Title inside sliding block */}
        <p className="product-description">{ele.description}</p>
      </div>
    </div>
  ))}
</div>


                </div>
            </div>
        </section>
    )
}