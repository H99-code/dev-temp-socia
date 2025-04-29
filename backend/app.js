const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Verwende JSON-Parser für POST-Anfragen
app.use(express.json());

// MongoDB-Verbindungs-URI direkt im Code hardcoden (ersetzt die .env-Variable)
const mongoURI = "mongodb+srv://flava1108:YD4%26jbRkW%40ZQdNE3njNr@cluster0.qe6ifml.mongodb.net/test?retryWrites=true&w=majority";

// Verbindung zu MongoDB Atlas herstellen
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Verbindung zu MongoDB Atlas erfolgreich'))
  .catch(err => console.error('Verbindung fehlgeschlagen:', err));

// Definiere das Schema für ein Produkt
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  inStock: Boolean
});

// Erstelle das Modell für Produkte
const Product = mongoose.model('Product', productSchema);

// Route, um alle Produkte abzurufen
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // Alle Produkte abfragen
    res.json(products); // Produkte als JSON zurückgeben
  } catch (error) {
    res.status(500).send('Fehler beim Abrufen der Produkte');
  }
});

// Route, um ein neues Produkt hinzuzufügen
app.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body); // Neues Produkt aus dem Request-Body erstellen
    await newProduct.save(); // Produkt speichern
    res.status(201).send('Produkt hinzugefügt'); // Bestätigung zurückgeben
  } catch (error) {
    res.status(500).send('Fehler beim Hinzufügen des Produkts');
  }
});

// Route, um ein bestimmtes Produkt nach ID abzurufen
app.get('/product/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Produkt anhand der ID suchen
    if (product) {
      res.json(product); // Produkt als JSON zurückgeben
    } else {
      res.status(404).send('Produkt nicht gefunden');
    }
  } catch (error) {
    res.status(500).send('Fehler beim Abrufen des Produkts');
  }
});

// Server starten
const PORT = process.env.PORT || 4000; // Standardport 4000
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
