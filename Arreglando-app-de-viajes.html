<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Migrar Mi Viaje a Firestore</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; }
    button { background: #4285F4; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 16px; cursor: pointer; }
    button:disabled { opacity: 0.5; }
    .log { background: #f5f5f5; padding: 16px; border-radius: 8px; margin-top: 20px; white-space: pre-wrap; font-family: monospace; }
    .ok { color: #0a0; } .err { color: #c00; }
  </style>
</head>
<body>
  <h1>Migrar viaje a Firebase</h1>
  <p>1. Haz login con Google<br>2. Pega tu JSON completo o sube el archivo<br>3. Pulsa Migrar</p>
  
  <button id="loginBtn">1. Login con Google</button>
  <p id="user"></p>
  
  <input type="file" id="fileInput" accept=".json" style="margin: 20px 0; display: block;">
  <textarea id="jsonInput" placeholder="O pega aquí tu JSON V151co-Toda-la-informacion..." style="width: 100%; height: 200px;"></textarea>
  
  <button id="migrateBtn" disabled>2. Migrar a Firestore</button>
  <div id="log" class="log"></div>

  <script type="module">
    import { auth, db, provider, signInWithPopup, onAuthStateChanged, doc, setDoc, serverTimestamp } from './firebase-config.js';
    
    const loginBtn = document.getElementById('loginBtn');
    const migrateBtn = document.getElementById('migrateBtn');
    const userEl = document.getElementById('user');
    const logEl = document.getElementById('log');
    const fileInput = document.getElementById('fileInput');
    const jsonInput = document.getElementById('jsonInput');
    let currentUser = null;
    
    function log(msg, cls = '') {
      logEl.innerHTML += `<div class="${cls}">${msg}</div>`;
    }
    
    loginBtn.onclick = async () => {
      try {
        const res = await signInWithPopup(auth, provider);
        log('Login OK: ' + res.user.email, 'ok');
      } catch(e) { log('Error login: ' + e.message, 'err'); }
    };
    
    onAuthStateChanged(auth, user => {
      currentUser = user;
      if (user) {
        userEl.textContent = 'Logueado: ' + user.email;
        loginBtn.disabled = true;
        migrateBtn.disabled = false;
      }
    });
    
    fileInput.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => jsonInput.value = ev.target.result;
      reader.readAsText(file);
    };
    
    migrateBtn.onclick = async () => {
      if (!currentUser) return log('Haz login primero', 'err');
      let data;
      try {
        data = JSON.parse(jsonInput.value);
      } catch(e) { return log('JSON inválido: ' + e.message, 'err'); }
      
      const hid = 'casa_' + currentUser.uid.slice(0,8); // householdId simple: casa_ + primeros 8 del uid
      log('Creando household: ' + hid);
      
      try {
        // 1. Crear household con el usuario como miembro
        await setDoc(doc(db, 'households', hid), {
          name: 'Mi Casa',
          members: [currentUser.uid],
          createdBy: currentUser.uid,
          createdAt: serverTimestamp()
        }, { merge: true });
        log('Household creado', 'ok');
        
        // 2. Guardar simulación A con el JSON completo
        await setDoc(doc(db, 'households', hid, 'simulations', 'A'), {
          ...data,
          updatedAt: serverTimestamp(),
          updatedBy: currentUser.uid
        });
        log('Simulación A migrada con ' + (data.events?.length || 0) + ' eventos', 'ok');
        log('\n✅ LISTO. Copia este Household ID: ' + hid, 'ok');
        log('Guárdalo. Lo usaremos en index.html');
      } catch(e) { log('Error migrando: ' + e.message, 'err'); }
    };
  </script>
</body>
</html>