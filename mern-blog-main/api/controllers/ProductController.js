import product from '../models/ProductModel';

export const createProduct = async (req, res) => {
    try {
      const { nom, description, prix, quantite, categorie, type, couleur, epaisseur } = req.body;
      const newProduct = new Product({
        nom,
        categorie,
        epaisseur,
        type,
        couleur,
        description,
        prix,
        quantite,
        image: req.file.filename
      });
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
  export const getProduct = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error getting products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  export const findProductByName = async (req, res) => {
      try {
          const  productName  = req.query.nom;
          console.log(productName);
          const product = await Product.findOne({ nom: productName });
          if (!product) {
              return res.status(404).json({ error: 'Product not found' });
              
          }
          res.status(200).json(product);
      } catch (error) {
          console.error('Error finding product by name:', error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
     
  };