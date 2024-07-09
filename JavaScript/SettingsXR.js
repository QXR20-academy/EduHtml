// Solicitud de Sesión WebXR
navigator.xr.requestSession('immersive-vr').then((session) => {
    // Código para manejar la sesión inmersiva
});


// Compatibilidad con Dispositivos
if (navigator.xr) {
    navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
        if (supported) {
            // El dispositivo soporta sesiones VR inmersivas
        }
    });
}

// Configuración de Renderizado
session.updateRenderState({
    baseLayer: new XRWebGLLayer(session, gl)
});

// Gestión del Espacio de Referencia
session.requestReferenceSpace('local').then((refSpace) => {
    // Código para manejar el espacio de referencia
});

// PWA y WebXR: Para aplicaciones WebXR que también son Aplicaciones Web Progresivas (PWA), hay configuraciones adicionales que pueden ser útiles: (Manifiesto Aplicación Web XR)