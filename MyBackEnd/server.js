const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const cors = require('cors');


const server = express();
server.use(bodyParser.json());
server.use(cors()); // enable CORS

// Establish the database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
});

db.connect(function (error) {
  if (error) {
    console.log("Error Connecting to DB");
  } else {
    console.log("successfully Connected to DB");
  }
});

// Establish the Port
server.listen(8085,function check(error) {
  if (error) {
    console.log("Error");
  } else {
    console.log("Started In Port 8085");
  }
});

// liste serveur autorisés 
server.get("/api/data", (req, res) => {
  const email = req.query.email;

  const sqlUsers = `SELECT DISTINCT * FROM users WHERE Email='${email}'`;
  
  let privileges = [];
  db.query(sqlUsers, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
      res.send({ status: false, message: error.message });
    } else {
      const user = result[0];
      if (user && user.Privilege) {
        privileges = user.Privilege.split(' ');
      }
      const sqlServeur = `
        SELECT *
        FROM serveur
        WHERE Nom_serveur IN (${privileges.map(p => `'${p}'`).join(',')})
      `;
  
      db.query(sqlServeur, function (error, result) {
        if (error) {
          console.log("Error Connecting to DB");
          res.send({ status: false, message: error.message });
        } else {
          res.send({ status: true, data: { users: result } });
        }
      });
    }
  });
});

//stat autorisés 




//users
// get user by id
server.get("/api/users/:id", (req, res) => {
  const sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
      res.send({ status: false, message: "Error Connecting to DB" });
    } else {
      res.send({ status: true, data: result });
    }
  });
});

// Get user by email profile 
server.get("/api/users/email/:email", (req, res) => {
  const userEmail = req.params.email;
  const sql = `SELECT * FROM users WHERE email='${userEmail}'`;
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
      res.send({ status: false, message: "Error Connecting to DB" });
    } else {
      res.send({ status: true, data: result });
    }
  });
});
// update user info
server.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  
  db.query(
  'UPDATE users SET nom = ?, email = ? WHERE id = ?',
  [userData.nom, userData.email, userId],
  (err, result) => {
  if (err) {
  console.error(err);
  res.status(500).send({ message: "Error updating user" });
  return;
  }
  console.log('User updated successfully');
  db.query(
  'SELECT * FROM users WHERE id = ?',
  [userId],
  (err, result) => {
  if (err) {
  console.error(err);
  res.status(500).send({ message: "Error retrieving user" });
  return;
  }
  const updatedUser = result[0];
  res.send({ data: updatedUser });
  }
  );
  }
  );
  });
  
  // update user password
  server.put("/api/users/:id/password", (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  
  db.query(
  'UPDATE users SET password = ? WHERE id = ?',
  [userData.password, userId],
  (err, result) => {
  if (err) {
  console.error(err);
  res.status(500).send({ message: "Error updating user" });
  return;
  }
  console.log('User password updated successfully');
  db.query(
  'SELECT * FROM users WHERE id = ?',
  [userId],
  (err, result) => {
  if (err) {
  console.error(err);
  res.status(500).send({ message: "Error retrieving user" });
  return;
  }
  const updatedUser = result[0];
  res.send({ data: updatedUser });
  }
  );
  }
  );
  });


// Create the Records
server.post("/api/users/add", (req, res) => {
  let details = {
    nom: req.body.nom,
    email: req.body.email,
    password: req.body.password,
    num:req.body.num, 
    role: req.body.role,
    Privilege: req.body.Privilege,

  };
  let sql = "INSERT INTO users SET ?";
  db.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "User created Failed" });
    } else {
      res.send({ status: true, message: "User created successfully" });
    }
  });
});

// View the Records
server.get("/api/users", (req, res) => {
  var sql = "SELECT DISTINCT * FROM users";
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      res.send({ status: true, data: result });
    }
  });
});

//serveur 
// View the Records
server.get("/api/serveur", (req, res) => {
  const sql = `SELECT * FROM serveur `;
  db.query(sql, function (error, result) {
      if (error) {
          console.log("Error Connecting to DB");
          res.send({ status: false, message: "Error Connecting to DB" });
      } else {
          res.send({ status: true, data: result });
      }
  });
});

//serv auto 
server.get("/api/data", (req, res) => {
  const sql = "SELECT DISTINCT Privilege FROM users";
  db.query(sql, function (error, result) {
      if (error) {
          console.log("Error Connecting to DB");
          res.send({ status: false, message: "Error Connecting to DB" });
      } else {
          res.send({ status: true, data: result });
      }
  });
});


// Delete the Records
server.delete("/api/users/delete/:id", (req, res) => {
  let sql = "DELETE FROM users WHERE id='" + req.params.id + "'";
  let query = db.query(sql, (error) => {
    if (error) {
      res.send({ status: false, message: "user Deleted Failed" });
    } else {
      res.send({ status: true, message: "user Deleted successfully" });
    }
  });
});




  // Search the Records
  server.get("/api/serveur/:Nom_Serveur", (req, res) => {
    var Nom_Serveur = req.params.Nom_Serveur;
    var sql = "SELECT * FROM serveur WHERE Nom_Serveur='" + Nom_Serveur + "'";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

  //get server with privilege 
  server.get("/api/serveur/:Nom_Serveur", (req, res) => {
    var Nom_Serveur = req.params.Nom_Serveur;
    var sql = "SELECT * FROM serveur WHERE Nom_Serveur='" + Nom_Serveur + "'";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

// Login route
// Login route
server.post('/api/users/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  // Check if inputs are empty
  if (!email || !password) {
    res.status(400).json({ message: 'Veuillez Fournir Votre Adresse email et Votre Mot de Passe' });
    return;
  }

  // Check if user exists in database
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Internal server error' });
    } else if (results.length == 0) {
      res.status(401).json({ message: 'Utilisateur non Trouvé' });
    } else if (results[0].password != password) {
      res.status(401).json({ message: 'Mot de Passe Incorrecte' });
    } else {
      // Check if user account is activated
      const user = results[0];
      if (user.role == 'admin-app') {
        res.json({ id: user.id, email: user.email, role: user.role, redirect: '/dashboard/acceuil' });
      } else if (user.role == 'admin-fn') {
        if (user.status == 'Activé') {
          res.json({ id: user.id, email: user.email, role: user.role, redirect: '/dashboard/acceuilfn' });
        } else {
          res.status(401).json({ message: 'Votre compte est désactivé' });
        }
      } else {
        res.status(401).json({ message: 'Role non autorisé' });
      }
    }
  });
});

//modif user table
server.get("/api/users/:id", (req, res) => {
  const userID = req.params.id;
  const sql = `SELECT * FROM users WHERE id='${userID}'`;
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      res.send({ status: true, data: result });
    }
  });
}); 

// update user role and privi
server.put("/api/users/:id/role-privilege", (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  console.log('Updating user with ID:', userId);
  console.log('Updating data:', userData);

  db.query(
    'UPDATE users SET role = ?, Privilege = ? WHERE id = ?',
    [userData.role, userData.Privilege, userId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Error updating user" });
        return;
      }

      console.log('User role and privilege updated successfully');

      db.query(
        'SELECT * FROM users WHERE id = ?',
        [userId],
        (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send({ message: "Error retrieving user" });
            return;
          }

          if (result.length === 0) {
            console.error(`User with ID ${userId} not found`);
            res.status(404).send({ message: "User not found" });
            return;
          }

          const updatedUser = result[0];
          res.send({ data: updatedUser });
        }
      );
    }
  );
});

// Activate user
server.post("/api/users/activate/:id", async (req, res) => {
  try {
    const result = await db.query(
      'UPDATE users SET status = ? WHERE id = ?',
      ['Activé', req.params.id]
    );
    res.json({ success: true, data: result[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Deactivate user
server.post("/api/users/desactivate/:id", async (req, res) => {
  try {
    const result = await db.query(
      'UPDATE users SET status = ? WHERE id = ?',
      ['Désactivé', req.params.id]
    );
    res.json({ success: true, data: result[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});


// demarrer serv
server.post("/api/serveur/demarre/:id", async (req, res) => {
  try {
    const result = await db.query(
      'UPDATE serveur SET status = ? WHERE id = ?',
      ['Démarre', req.params.id]
    );
    res.json({ success: true, data: result[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// arreter serv
server.post("/api/serveur/arret/:id", async (req, res) => {
  try {
    const result = await db.query(
      'UPDATE serveur SET status = ? WHERE id = ?',
      ['Arrêté', req.params.id]
    );
    res.json({ success: true, data: result[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get user by email
server.get("/api/users/:email", (req, res) => {
  const userEmail = req.params.email;
  const sql = `SELECT * FROM users WHERE email='${userEmail}'`;
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      res.send({ status: true, data: result });
    }
  });
});
