import os
from pathlib import Path
from pdf2image import convert_from_path

def extraer_imagenes_desde_pdfs(zoom=24):
    """
    Busca todos los PDFs en el directorio actual y genera sus páginas como imágenes JPG.
    
    zoom: factor de escala relativo (2400% = 24)
    """
    dir_actual = Path(__file__).parent
    dir_imagenes = dir_actual / "imagenes"
    dir_imagenes.mkdir(exist_ok=True)

    pdfs = list(dir_actual.glob("*.pdf"))
    if not pdfs:
        print("No se encontraron archivos PDF en el directorio actual.")
        return

    # pdf2image usa DPI para la resolución, 100 DPI por defecto.
    # 100 * 24 ≈ 2400%.
    dpi = 100 * zoom

    for pdf_path in pdfs:
        print(f"Procesando: {pdf_path.name}")

        paginas = convert_from_path(
            pdf_path,
            dpi=dpi,
            fmt="jpg",
            output_folder=dir_imagenes,
            output_file=pdf_path.stem,  # usa el nombre del pdf
            paths_only=True
        )

        print(f"  -> {len(paginas)} páginas convertidas en {dir_imagenes}/")

    print("Conversión completada con éxito.")

if __name__ == "__main__":
    extraer_imagenes_desde_pdfs(zoom=24)