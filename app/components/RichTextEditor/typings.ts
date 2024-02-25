export interface RichTextEditorProps {
    value: string;
    label?: string;
    description?: string;
    error?: string;
    onChange?: (value: string) => void;
}