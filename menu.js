document.getElementById('home').addEventListener("click", function(){
    window.location.href="home.html";
});

document.getElementById("reservation").addEventListener("click", function(){
    window.location.href="reservation.html";
});

angular.module('restaurantApp', [])
.controller('MenuController', function() {
    this.categories = [
        {
        name: 'Soups',
            items: [
                { name: 'Mushroom Soup', description: 'Savor the earthy comfort of mushroom soup, a velvety blend of fungi, broth, and cream, warmed with aromatic spices, perfect for cozy evenings and nourishing the soul.', price: 210, nonVeg: false},

                { name: 'Sweet Corn Soup', description: 'A comforting blend of creamy broth infused with tender sweet corn kernels, delicately seasoned to perfection for a satisfyingly warm and wholesome experience."', price: 235, nonVeg: false},

                { name: 'Tom Yum Soup', description: 'Tom Yum Soup is a spicy and tangy Thai broth infused with lemongrass, lime leaves, chili peppers, and galangal, often featuring shrimp or chicken, delivering a flavorful culinary adventure.', price: 243, nonVeg: false},

                { name: 'Chicken Manchow Soup', description: 'Chicken Manchow Soup is a spicy and flavorful Indo-Chinese soup made with shredded chicken, vegetables, and aromatic spices, offering a tangy and hearty culinary experience.', price: 280, nonVeg: true},

                {name: 'Chicken Corn Soup', description: 'Chicken corn soup is a hearty broth-based dish featuring tender chicken, sweet corn kernels, and aromatic seasonings. Comforting and nourishing, it is a classic favorite in many culinary traditions.', price: 250, nonVeg: true},

                {name: 'Crab Soup', description: 'A savory delight blending succulent crab meat, aromatic spices, and fresh vegetables in a flavorful broth, offering a rich and satisfying culinary experience in a bowl.', price: 300, nonVeg: true},
                    // Add more soups
            ]
        },
            // Add more categories as needed
        {
        name: 'Starters',
            items: [
                { name: 'Harabhara Kebab', description: 'Harabhara kebab is a vegetarian Indian appetizer made from spinach, peas, potatoes, and spices, formed into patties and grilled to perfection, offering a flavorful and healthy option.', price: 280, nonVeg: false },

                {name: 'Achaari Soya Chaap', description: "Don't let the pic fool you. This dish is 100% vegetarian. Packed with proteins and all the flavors of the Punjabi chicken achar.", price: 300, nonVeg: false},

                {name: 'Paneer Tikka', description: 'Paneer tikka is a popular Indian appetizer made with chunks of paneer (Indian cottage cheese) marinated in a flavorful blend of spices and grilled to perfection.', price: 275, nonVeg: false},

                { name: 'Chicken Tikka', description: 'Chicken tikka is a traditional Indian dish featuring marinated chicken chunks cooked to perfection in a tandoor oven, resulting in tender, flavorful bites with aromatic spices.', price: 340, nonVeg: true},

                { name: 'Chicken Lollipop', description: 'Savory appetizer made from chicken wings, shaped into lollipops by scraping meat down the bone and frying, often served with spicy or tangy dipping sauces.', price: 330, nonVeg: true},

                {name: 'Chicken Chilli', description: 'A popular Indo-Chinese dish featuring tender chicken pieces tossed in a spicy, tangy sauce infused with garlic, ginger, and green chilies, offering a flavorful and satisfying culinary experience.', price: 276, nonVeg: true}
                    // Add more starters
            ]
        },

        {
        name: 'Main Course',
            items: [

                {name: 'Methi Malai Mutter', description: 'Methi Malai Mutter is a rich and creamy Indian dish made with fenugreek leaves (methi), green peas (mutter), and a luxurious cream sauce, bursting with flavor and aromatic spices.', price: 255, nonVeg: false},

                {name: 'Kadhai Paneer', description: 'Kadhai Paneer is a flavorful North Indian dish made with paneer (Indian cottage cheese), bell peppers, onions, and tomatoes cooked in a spicy and aromatic blend of Indian spices.', price: 276, nonVeg: false},

                {name: 'Paneer Butter Masala', description: 'A creamy and flavorful Indian dish with paneer (cottage cheese) cooked in a rich tomato-based gravy.', price: 287, nonVeg: false},

                { name: 'Butter Chicken', description: 'Butter chicken uses tandoori chicken cooked in a tandoor (a type of Indian oven) that gives the chicken, subsequently, a wonderful smoky flavor.', price: 350, nonVeg: true},

                {name: 'Chicken Kadhai', description: 'a dish of roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour. It is named for the cylindrical clay oven in which it is cooked, a tandoor.', price: 200, nonVeg: true},

                {name: 'Murgh Mussalam', description: 'Murgh Mussalam is a traditional Mughlai dish consisting of a whole chicken marinated, stuffed, and cooked in a rich gravy with spices, nuts, yogurt, and herbs, yielding a flavorful delicacy.', price: 428, nonVeg: true}

            ]
        },

        {
        name: 'Sides',
            items: [

                {name: 'Roti', description: 'Traditional South Asian flatbread made from whole wheat flour, water, and salt, commonly cooked on a griddle or skillet.', price: 90, nonVeg: true, veg: true},

                {name: 'Chapati', description: '', price: 77, nonVeg: true,veg: true },

                {name: 'Naan', description: 'A soft, leavened flatbread originating from South Asia, typically cooked in a tandoor oven and enjoyed with various dishes.', price: 85, nonVeg: true, veg: true},

                {name: 'Butter Garlic Naan', description: ' Soft, fluffy Indian bread infused with rich butter and aromatic garlic, perfect for pairing with flavorful curries.', price: 80, nonVeg: true, veg: true},

                {name: 'Butter Naan', description: 'Butter naan is a soft, leavened Indian flatbread made from refined flour, yogurt, and butter. It is traditionally baked in a tandoor, resulting in a fluffy texture with a rich, buttery flavor.', price: 99, nonVeg: true, veg: true},

                {name: 'Masala Papad', description: 'Masala papad is a popular Indian appetizer made by topping a crispy papad with a tangy mix of onions, tomatoes, chili, coriander, and spices, offering a delightful burst of flavors.', price: 96, nonVeg: true, veg: true},

                {name: 'Sada Papad', description: 'Papad is a thin, crisp, and disc-shaped Indian flatbread made primarily from lentil, chickpea, rice, or potato flour. It is a popular accompaniment to many Indian meals and is often served as an appetizer or snack.', price: 82, nonVeg: true, veg: true}
            ]
        },

        {
        name: 'Rice and Noodles',
            items: [

                {name: 'Veg Fried Rice', description: 'Veg fried rice is a delicious dish made by stir-frying cooked rice with mixed vegetables, soy sauce, and spices, creating a flavorful and satisfying vegetarian meal.', price: 300, nonVeg: false},

                {name: 'Veg Noodles', description: 'A popular Indo-Chinese dish featuring stir-fried noodles tossed with colorful vegetables, aromatic sauces, and spices, creating a flavorful and satisfying vegetarian noodle dish.', price: 320, nonVeg: false}, 

                {name: 'Veg Biryani', description: 'Veg Biryani is a fragrant and flavorful rice dish made with mixed vegetables, basmati rice, and aromatic spices, cooked together to create a delicious and satisfying vegetarian meal.', price: 400, nonVeg: false},

                {name: 'Soyabean Pulao', description: 'Soybean pulao is a nutritious and flavorful rice dish made with soybeans, rice, and aromatic spices, offering a delicious and protein-rich meal with a delightful blend of flavors.', price: 335, nonVeg: false},

                {name: 'Tawa Pulao', description: 'Tawa Pulao is a popular Indian street food dish made by stir-frying cooked rice with assorted vegetables, spices, and herbs on a flat griddle, resulting in a flavorful rice delicacy.', price: 266, nonVeg: false},
                    
                {name: 'Veg Pulao', description: 'Veg pulao is a fragrant rice dish cooked with assorted vegetables, aromatic spices, and flavorful herbs. It offers a delightful blend of textures and tastes, perfect for a satisfying vegetarian meal.', price: 278, nonVeg: false},

                {name : 'Chicken Biryani', description: 'Hyderabadi biryani recipe, the most delicious & flavorful dum hyderabadi biryani any one woud love to eat', price: 290, nonVeg: true},

                {name: 'Chicken Tikka Biryani', description: 'Chicken Tikka Biryani is a flavorful Indian rice dish featuring tender chicken tikka marinated in spices, layered with fragrant basmati rice, and cooked to perfection, offering a delightful culinary experience.', price: 312, nonVeg: true},

                {name: 'Mutton Biryani', description: 'Mutton biryani is a fragrant rice dish cooked with tender mutton pieces, basmati rice, and aromatic spices, creating a flavorful and hearty meal beloved for its rich taste and texture.', price: 329, nonVeg: true},

                {name: 'Mutton Hyderabadi Biryani', description: 'A fragrant, spiced rice dish layered with tender mutton pieces, caramelized onions, aromatic spices, and fresh herbs, slow-cooked to perfection for a rich and indulgent culinary experience.', price: 345, nonVeg: true},
                    
                {name: 'Chicken Fried Rice', description: 'Chicken fried rice is a delicious stir-fried dish made with cooked rice, tender chicken pieces, mixed vegetables, and savory seasonings, offering a satisfying blend of flavors in every bite.', price: 380, nonVeg: true},

                {name: 'Chicken Hakka Noodles', description: 'Chicken Hakka Noodles: A popular Indo-Chinese dish featuring stir-fried noodles tossed with tender chicken pieces, crisp vegetables, and savory sauces, creating a flavorful and satisfying meal with a delightful fusion twist.', price: 350, nonVeg: true},
                    
            ]
        },

        {
        name: 'Deserts',
            items: [

                {name: 'Sizzling Brownie', description: 'A decadent dessert featuring a warm, fudgy brownie served on a sizzling hot plate, topped with a scoop of ice cream and drizzled with rich chocolate sauce.', price: 320, nonVeg: true, veg: true},

                {name: 'Gajar Ka Halwa', description: 'Gajar ka halwa is a traditional Indian dessert made from grated carrots, milk, sugar, and ghee, infused with cardamom and garnished with nuts, offering a rich, sweet indulgence.', price: 250, nonVeg: true, veg: true},

                {name: 'Mooli Ka Halwa', description: 'Muli ka halwa is a traditional Indian dessert made from grated radish, sugar, ghee, and nuts. It is cooked until rich and golden, offering a sweet, aromatic, and indulgent treat.', price: 235, nonVeg: true, veg: true},

                {name: 'Moong Dal Halwa', description: 'Moong dal halwa is a traditional Indian dessert made from split yellow lentils, ghee, sugar, and flavored with cardamom. It has a rich, creamy texture and a delightful nutty taste.', price: 196, nonVeg: true, veg: true},

                {name: 'Chocolate Ice Cream', description: '', price: 280, nonVeg: true, veg: true}, 

                {name: 'Vanilla Ice Cream', description: '', price: 266, nonVeg: true, veg: true},

                {name: 'Blueberry Cheescake', description: '', price: 274, nonVeg: true, veg: true},

                {name: 'Tiramisu Cake', description: '', price: 199, nonVeg: true, veg: true},

                {name: 'Chocolate MilkShake', descriptio: '', price: 300, nonVeg: true, veg: true},
             ]
        },
    ];
        
// Function to toggle vegetarian items
this.showVeg = true;
this.showNonVeg = true; // Initially display both veg and non-veg items

this.toggleVeg = function() {
    this.showVeg = !this.showVeg;
    this.showNonVeg = false;
};

// Function to toggle non-vegetarian items
this.toggleNonVeg = function() {
    this.showNonVeg = !this.showNonVeg;
    this.showVeg = false;
};

// Function to filter items based on vegetarian/non-vegetarian selection
this.filteredItems = function(items) {
    if (this.showVeg) {
        return items.filter(item => !item.nonVeg || item.veg);
    } else if (this.showNonVeg) {
        return items.filter(item => item.nonVeg);
    } else {
        return items; // Return all items if no filter is applied
    }
};

});
