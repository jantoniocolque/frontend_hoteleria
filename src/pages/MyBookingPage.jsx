import MyBooking from "../components/MyBooking";



export default function MyBookingPage (){

const booking= [ {
            reservationId: 13,
            dateIn: "2021-12-12",
            dateOut: "2021-12-13",
            hourIn: "09:00:00",
            user: {
                userId: 17,
                name: "Jhonathan",
                surname: "Antonio",
                email: "ajhonatan27@gmail.com",
                password: "$2a$10$AiBBGNmsozoco2nrhtr0E./3B9hBSvU/wfHwrTAV7X9IrgkKArZBK",
                validated: false,
                role: {
                    roleId: 2,
                    name: "USER"
                }
            },
            product: {
                productId: 2,
                name: "Alvear Palace Hotel",
                description: "En el corazón de Recoleta, disfruta de un hotel inspirado en las pasiones de Buenos Aires.",
                address: "Avda. Alvear 1891",
                images: [
                    {
                        "imageId": 1,
                        "title": "Hotel faena img3",
                        "url": "https://th.bing.com/th/id/OIP.XCmI4AHxjd7lhh-E4sVrYAHaFj?pid=ImgDet&w=690&h=518&rs=1"
                    }],
                latitude: -34.587627,
                longitude: -58.388901,
                location: {
                    locationId: 1,
                    city: "Buenos Aires",
                    country: "Argentina"
                },
                category: {
                    categoryId: 1,
                    title: "Hotel",
                    description: "Lugar acojedor para disfrutar con la familia",
                    urlImage: "https://bucketnido.s3.amazonaws.com/Categories/hotel.jpeg"
                },
                features: []
            }
         }];
    return(
        <MyBooking booking= {booking} dateIn={booking[0].dateIn}  dateOut={booking[0].dateOut}/>
    )
}