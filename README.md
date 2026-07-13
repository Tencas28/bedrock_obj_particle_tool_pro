# OBJ → Bedrock Particles Pro

Herramienta local para convertir modelos `.obj` de Minecraft Bedrock en comandos `/particle`, con soporte para `.mtl`, texturas y una vista previa 3D con control táctil.

## Qué incluye
- Importación de `.obj`, `.mtl` y texturas.
- Vista previa del modelo con textura y sombreado.
- Simulación “como se vería en juego” con partículas animadas.
- Exportación con coordenadas locales `^ ^ ^` mediante `execute`, o coordenadas absolutas.
- Panel de metadatos de partículas basado en el paquete de muestras de Bedrock.

## Uso
1. Abre `index.html`.
2. Carga el `.obj` y, si existe, el `.mtl` y sus texturas.
3. Ajusta escala, rotación, pivote y muestreo.
4. Elige la partícula y exporta el `.mcfunction`.

## Notas
- La vista previa usa controles táctiles: arrastra para rotar y pellizca para acercar.
- Si una textura no aparece, revisa que el nombre del archivo coincida con el `map_Kd` del `.mtl`.
- El modo local genera líneas del tipo `execute as @s at @s rotated as @s run particle ... ^ ^ ^`.
