import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
          <Header />
          
            <div className="container col-md-5"> 
            <h3>JJames SeaFood</h3>
            <p className="title text-justify mt-4 mb-4">
            ร้านอาหารที่เปิดให้บริการมานานตั้งแต่ปี 2512 ซึ่งมีเมนูเด็ดขึ้นจนกลายเป็นต้นตำรับของร้านได้แก่ "ปูผัดผงกะหรี่" ซึ่งเป็นสูตรพิเศษ เป็นเอกลักษณ์เฉพาะตัวที่ได้รับความนิยมมาตลอด ร้านนี้เหมาะเป็นอย่างยิ่งสำหรับผู้ที่ชอบเมนูอาหารไทย-จีน และอาหารทะเลแบบสด ๆ ที่เน้นการใช้วัตถุดิบที่สดใหม่ ทั้งกุ้ง หอย ปูและปลา ซึ่งเมนูแนะนำ ได้แก่ ปูผัดผงกะหรี่, ปลากะพงนึ่งมะนาว, กุ้งอบวุ้นเส้น, ตำยำกุ้ง, ปลาหมึกนึ่งมะนาว และเมนูของหวานอย่างบัวลอยน้ำขิง เป็นต้น
            </p>
            <h4 className="text-success">จาก JJames</h4>
            </div>

          <Footer company="JJames" email="kitunpra@gmail.com"/>
        </div>

    )

}

export default About;