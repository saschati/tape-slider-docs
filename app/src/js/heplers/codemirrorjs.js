import {EditorState} from "@codemirror/state";
import {EditorView, keymap} from "@codemirror/view";
import {basicSetup} from "codemirror";
import {indentWithTab} from "@codemirror/commands";
import {javascript} from "@codemirror/lang-javascript";

export default function initJsEditor(elem, doc) {
    EditorState.readOnly = true;

    return new EditorView({
        state: EditorState.create({
            doc,
            extensions: [
                basicSetup,
                keymap.of([indentWithTab]),
                javascript(),
                EditorState.changeFilter.of(() => false)
            ],
            readOnly: true
        }),

        parent: elem
    });
}