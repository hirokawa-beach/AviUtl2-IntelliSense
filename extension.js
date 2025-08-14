const vscode = require('vscode');

function activate(context) {


    context.subscriptions.push(
        vscode.languages.registerSignatureHelpProvider(
            { scheme: 'file', language: 'lua' },
            {
                provideSignatureHelp(document, position, token, context) {

                    const line = document.lineAt(position.line).text;
                    

                    const substring = line.substring(0, position.character);

                    const nameMatch = substring.match(/(obj\.\w+)\s*\([^)]*$/);



                    const functionName = nameMatch[1];

                    const helpMap = {
                        'obj.mes': {
                            label: 'obj.mes(text)',
                            parameters: [
                                { label: 'text', documentation: 'テキストオブジェクト内でのテキスト' }
                            ]
                        },
                        'obj.effect': {
                            label: 'obj.effect(name, param1, value1, param2, value2, ...)',
                            parameters: [
                                { label: 'name', documentation: 'エフェクト名' },
                                { label: 'param1', documentation: 'パラメータ名' },
                                { label: 'value1', documentation: 'パラメータ値' },
                                { label: 'param2', documentation: 'パラメータ名' },
                                { label: 'value2', documentation: 'パラメータ値' },
                                { label: '...', documentation: 'param,value のペアを繰り返し指定可能' }
                            ]
                        },
                        'obj.draw': {
                            label: 'obj.draw(ox, oy, oz, zoom, alpha, rx, ry, rz)',
                            parameters: [
                                { label: 'ox', documentation: '相対座標X' },
                                { label: 'oy', documentation: '相対座標Y' },
                                { label: 'oz', documentation: '相対座標Z' },
                                { label: 'zoom', documentation: '拡大率(1.0=等倍)' },
                                { label: 'alpha', documentation: '不透明度(0.0=透明/1.0=不透明)' },
                                { label: 'rx', documentation: 'X軸回転角度' },
                                { label: 'ry', documentation: 'Y軸回転角度' },
                                { label: 'rz', documentation: 'Z軸回転角度' }
                            ]
                        },
                        'obj.drawpoly': {
                            label: 'obj.drawpoly(x0, y0, z0, x1, y1, z1, x2, y2, z2, x3, y3, z3[, u0, v0, u1, v1, u2, v2, u3, v3, alpha])',
                            parameters: [
                                { label: 'x0', documentation: '四角形の頂点0のX座標' },
                                { label: 'y0', documentation: '四角形の頂点0のY座標' },
                                { label: 'z0', documentation: '四角形の頂点0のZ座標' },
                                { label: 'x1', documentation: '四角形の頂点1のX座標' },
                                { label: 'y1', documentation: '四角形の頂点1のY座標' },
                                { label: 'z1', documentation: '四角形の頂点1のZ座標' },
                                { label: 'x2', documentation: '四角形の頂点2のX座標' },
                                { label: 'y2', documentation: '四角形の頂点2のY座標' },
                                { label: 'z2', documentation: '四角形の頂点2のZ座標' },
                                { label: 'x3', documentation: '四角形の頂点3のX座標' },
                                { label: 'y3', documentation: '四角形の頂点3のY座標' },
                                { label: 'z3', documentation: '四角形の頂点3のZ座標' },
                                { label: 'u0', documentation: '頂点0に対応するオブジェクトの画像のX座標' },
                                { label: 'v0', documentation: '頂点0に対応するオブジェクトの画像のY座標' },
                                { label: 'u1', documentation: '頂点1に対応するオブジェクトの画像のX座標' },
                                { label: 'v1', documentation: '頂点1に対応するオブジェクトの画像のY座標' },
                                { label: 'u2', documentation: '頂点2に対応するオブジェクトの画像のX座標' },
                                { label: 'v2', documentation: '頂点2に対応するオブジェクトの画像のY座標' },
                                { label: 'u3', documentation: '頂点3に対応するオブジェクトの画像のX座標' },
                                { label: 'v3', documentation: '頂点3に対応するオブジェクトの画像のY座標' },
                                { label: 'alpha', documentation: '' },
                                
                            ]
                        },
                        'obj.load': {
                            label: 'obj.load(type, value)',
                            parameters: [
                                { label: 'type', documentation: 'ロードする種類' },
                                { label: 'value', documentation: '値' }
                            ]
                        },
                        'obj.setfont': {
                            label: 'obj.setfont(name, size[, type, col1, col2])',
                            parameters: [
                                { label: 'name', documentation: 'フォント名' },
                                { label: 'size', documentation: 'フォントサイズ' },
                                { label: 'type', documentation: '文字の装飾(0~6,0=標準文字/1=影付き/2=影付き(薄)/3=縁取り/4=縁取り(細)/5=縁取り(太)/6=縁取り)' },
                                { label: 'col1', documentation: '文字色' },
                                { label: 'col2', documentation: '影・縁の色' }
                            ]
                        },
                        'obj.rand': {
                            label: 'obj.rand(st_num, ed_num[, seed, frame])',
                            parameters: [
                                { label: 'st_num', documentation: '乱数の最小値' },
                                { label: 'ed_num', documentation: '乱数の最大値' },
                                { label: 'seed', documentation: '乱数の種(プラス値→オブジェクト毎でなる乱数/マイナス値→すべてのオブジェクトで同じ乱数)' },
                                { label: 'frame', documentation: 'フレーム番号(省略時は現在のフレーム)' }
                            ]
                        },
                        'obj.setoption': {
                            label: 'obj.setoption(name, value)',
                            parameters: [
                                { label: 'name', documentation: 'オプション名(例:描画先変更→"drawtarget"/ 詳細はlua.txtを参照してください。)' },
                                { label: 'value', documentation: 'オプション値(例:仮想バッファに描画先変更→"tempbuffer")' }
                            ]
                        },
                        'obj.getvalue': {
                            label: 'obj.getvalue(target[, time, section])',
                            parameters: [
                                { label: 'target', documentation: '設定種別(トラックバー0~3→0~3, 基準座標X/Y/Z→"x/y/z", 基準X/Y/Z軸回転角度→"rx/ry/rz")' },
                                { label: 'time', documentation: 'どの時点の値を取得するか(秒)' },
                                { label: 'section', documentation: '時間の基準となる区間番号(0=開始点/1=最初の中間点/2=2個目の中間点/-1=終了点)' }
                            ]
                        },
                        'obj.setanchor': {
                            label: 'obj.setanchor(name, num[, option, ...])',
                            parameters: [
                                { label: 'name', documentation: '--value,--dialogで定義されている座標を格納する変数名' },
                                { label: 'num', documentation: 'アンカーポイントの数' },
                                { label: 'option', documentation: '各種オプション(例："line"=アンカーポイントを線で結ぶ,"loop"=線で結び一周させる)' },
                                { label: '...', documentation: 'オプションを続けて書く' },
                            ]
                        },
                        'obj.getpixel': {
                            label: 'obj.getpixel(x, y[, type])',
                            parameters: [
                                { label: 'x', documentation: '取得するピクセルのX座標' },
                                { label: 'y', documentation: '取得するピクセルのY座標' },
                                { label: 'type', documentation: 'ピクセル情報のタイプ("col","rgb")' }
                            ]
                        },
                        'obj.pixeloption': {
                            label: 'obj.pixeloption(name, value)',
                            parameters: [
                                { label: 'name', documentation: 'オプション名(ピクセル情報タイプ→"type",ピクセル情報の読み出し先を指定→"get")' },
                                { label: 'value', documentation: 'オプション値' }
                            ]
                        },
                        'obj.getaudio': {
                            label: 'obj.getaudio(buf, file, type, size)',
                            parameters: [
                                { label: 'buf', documentation: 'データを受け取るテーブルを指定' },
                                { label: 'file', documentation: '音声ファイル名' },
                                { label: 'type', documentation: '取得データの種類' },
                                { label: 'size', documentation: '取得したデータ数,サンプリングレート' }
                            ]
                        },
                        'obj.copybuffer': {
                            label: 'obj.copybuffer(dst, src)',
                            parameters: [
                                { label: 'dst', documentation: 'コピー先のバッファ' },
                                { label: 'src', documentation: 'コピー元のバッファ' }
                            ]
                        },
                        'obj.clearbuffer': {
                            label: 'obj.clearbuffer(target[, color])',
                            parameters: [
                                { label: 'target', documentation: 'クリアするバッファ名' },
                                { label: 'color', documentation: '色(未指定なら透明色)' }
                            ]
                        },
                        'obj.pixelshader': {
                            label: 'obj.pixelshader(name, target, {resource, ...}[, {constant, ...}, blend])',
                            parameters: [
                                { label: 'name', documentation: 'シェーダーの登録名' },
                                { label: 'target', documentation: '出力先のバッファ名' },
                                { label: 'resource', documentation: '参照するバッファ名の配列' },
                                { label: 'constant', documentation: '参照する定義の配列' },
                                { label: 'blend', documentation: '出力先へのブレンド方法' }
                            ]
                        },
                        'obj.computeshader': {
                            label: 'obj.computeshader(name, {target}, {resource, ...}[, {constant, ...}, countX, countY, countZ])',
                            parameters: [
                                { label: 'name', documentation: 'シェーダーの登録名' },
                                { label: 'target', documentation: '出力先のバッファ名' },
                                { label: 'resource', documentation: '参照するバッファ名の配列' },
                                { label: 'constant', documentation: '参照する定義の配列' },
                                { label: 'countX', documentation: 'X軸スレッドグループ数' },
                                { label: 'countY', documentation: 'Y軸スレッドグループ数' },
                                { label: 'countZ', documentation: 'Z軸スレッドグループ数' }
                            ]
                        },
                        'obj.getpoint': {
                            label: 'obj.getpoint(target[, option])',
                            parameters: [
                                { label: 'target', documentation: '取得対象' },
                                { label: 'option', documentation: '取得する値の種別' }
                            ]
                        },
                        'obj.getinfo': {
                            label: 'obj.getinfo(name, ...)',
                            parameters: [
                                { label: 'name', documentation: '取得する情報の名前(スクリプトフォルダのパス→"script_path",動画が出力中かどうか→"saving"など)' }
                            ]
                        },
                        'obj.interpolation': {
                            label: 'obj.interpolation(time, x0, y0, z0, x1, y1, z1, x2, y2, z2, x3, y3, z3)',
                            parameters: [
                                { label: 'time', documentation: '時間' },
                                { label: 'x0', documentation: '開始点X座標' },
                                { label: 'y0', documentation: '開始点Y座標' },
                                { label: 'z0', documentation: '開始点Z座標' },
                                { label: 'x1', documentation: '制御点1,X座標' },
                                { label: 'y1', documentation: '制御点1,Y座標' },
                                { label: 'z1', documentation: '制御点1,Z座標' },
                                { label: 'x2', documentation: '制御点2,X座標' },
                                { label: 'y2', documentation: '制御点2,Y座標' },
                                { label: 'z2', documentation: '制御点2,Z座標' },
                                { label: 'x3', documentation: '終了点X座標' },
                                { label: 'y3', documentation: '終了点Y座標' },
                                { label: 'z3', documentation: '終了点Z座標' }
                            ]
                        },
                    };

                    let info = helpMap[functionName];
                    if (functionName === 'obj.load') {
                        if (line.includes('obj.load("movie"')) {
                            info = {
                                label: 'obj.load("movie", file[, time])',
                                parameters: [
                                    { label: '"movie"', documentation: '' },
                                    { label: 'file', documentation: '動画ファイルパス' },
                                    { label: 'time', documentation: '表示する画像の時間(秒)(省略可)' }
                                ]
                            };
                        } else if (line.includes('obj.load("image"')) {
                            info = {
                                label: 'obj.load("image", file)',
                                parameters: [
                                    { label: 'file', documentation: '画像ファイルパス' }
                                ]
                            };
                        } else if (line.includes('obj.load("text"')) {
                            info = {
                                label: 'obj.load("text", text[, speed, time])',
                                parameters: [
                                    { label: '"text"', documentation: '' },
                                    { label: 'text', documentation: '読み込むテキスト' },
                                    { label: 'speed', documentation: 'timeパラメータの1秒間で表示する文字数' },
                                    { label: 'time', documentation: 'speedパラメータに対する経過時間' }
                                ]
                            };
                        } else if (line.includes('obj.load("figure"')) {
                            info = {
                                label: 'obj.load("figure", name[, color, size, line, round])',
                                parameters: [
                                    { label: '"figure"', documentation: '' },
                                    { label: 'name', documentation: '図形名、SVGファイル名' },
                                    { label: 'color', documentation: '色(カラーコード)' },
                                    { label: 'size', documentation: '図形のサイズ' },
                                    { label: 'line', documentation: '図形のライン幅' },
                                    { label: 'round', documentation: '角丸にするか(true=する,false=しない<default>)' }
                                ]
                            };
                        } else if (line.includes('obj.load("framebuffer"')) {
                            info = {
                                label: 'obj.load("framebuffer"[, x, y, w, h][, alpha])',
                                parameters: [
                                    { label: '"framebuffer"', documentation: '' },
                                    { label: 'x, y, w, h', documentation: 'フレームバッファから取得する範囲(省略時全体)' },
                                    { label: 'alpha', documentation: 'アルファチャンネルを維持(true=する,false=しない<default>)' }
                                ]
                            };
                        } else if (line.includes('obj.load("tempbuffer"')) {
                            info = {
                                label: 'obj.load("tempbuffer"[, x, y, w, h])',
                                parameters: [
                                    { label: 'x, y, w, h', documentation: 'フレームバッファから取得する範囲(省略時全体)' }
                                ]
                            };
                        } else if (line.includes('obj.load("layer"')) {
                            info = {
                                label: 'obj.load("layer", no[, effect])',
                                parameters: [
                                    { label: '"layer"', documentation: '' },
                                    { label: 'no', documentation: 'レイヤー番号(1～)' },
                                    { label: 'effect', documentation: '追加エフェクトの実行(true=する,false=しない<default>)' }
                                ]
                            };
                        }
                    }


                    

                    const sigInfo = new vscode.SignatureInformation(info.label);
                    sigInfo.parameters = info.parameters.map(
                        p => new vscode.ParameterInformation(p.label, p.documentation)
                    );

                    const parameterIndex = calculateActiveParameter(substring);
                    

                    const sigHelp = new vscode.SignatureHelp();
                    sigHelp.signatures = [sigInfo];
                    sigHelp.activeSignature = 0;
                    sigHelp.activeParameter = Math.min(parameterIndex, info.parameters.length - 1);

                    return sigHelp;
                }
            },
            '(', ',' 
        )
    );

    context.subscriptions.push(
        vscode.languages.registerSignatureHelpProvider(
            { scheme: 'file', language: 'lua' },
            {
                provideSignatureHelp(document, position) {
                    const line = document.lineAt(position.line).text;
                    const substring = line.substring(0, position.character);

                    const nameMatch = substring.match(/(\w+)\s*\([^)]*$/);
                    if (!nameMatch) return null;

                    const functionName = nameMatch[1];
                    if (functionName.startsWith('obj')) return null; // obj系は除外

                    const helpMap = {
                        'RGB': {
                            label: 'RGB(r, g, b)',
                            parameters: [
                                { label: 'r', documentation: '赤' },
                                { label: 'g', documentation: '緑' },
                                { label: 'b', documentation: '青/このあと続けて同じようにr2,g2,b2指定で時間経過に応じて色変化' },
                            ]
                        },
                        'HSV': {
                            label: 'HSV(h, s, v)',
                            parameters: [
                                { label: 'h', documentation: '色相' },
                                { label: 's', documentation: '彩度' },
                                { label: 'v', documentation: '明度/このあと同じようにr2,g2,b2指定で時間経過に応じて色変化' },
                            ]
                        },
                        'OR': {
                            label: 'OR(a, b)',
                            parameters: [
                                { label: 'a', documentation: '' },
                                { label: 'b', documentation: '' },
                            ]
                        },
                        'AND': {
                            label: 'AND(a, b)',
                            parameters: [
                                { label: 'a', documentation: '' },
                                { label: 'b', documentation: '' },
                            ]
                        },
                        'XOR': {
                            label: 'XOR(a, b)',
                            parameters: [
                                { label: 'a', documentation: '' },
                                { label: 'b', documentation: '' },
                            ]
                        },
                        'SHIFT': {
                            label: 'SHIFT(a, shift)',
                            parameters: [
                                { label: 'a', documentation: '' },
                                { label: 'shift', documentation: '(正の数→左シフト、負の数→右シフト)' },
                            ]
                        },
                        'rotation': {
                            label: 'rotation(x0, y0, x1, y1, x2, y2, x3, y3, zoom, r)',
                            parameters: [
                                { label: 'x0', documentation: '頂点0のX座標' },
                                { label: 'y0', documentation: '頂点0のY座標' },
                                { label: 'x1', documentation: '頂点1のX座標' },
                                { label: 'y1', documentation: '頂点1のY座標' },
                                { label: 'x2', documentation: '頂点2のX座標' },
                                { label: 'y2', documentation: '頂点2のY座標' },
                                { label: 'x3', documentation: '頂点3のX座標' },
                                { label: 'y3', documentation: '頂点3のY座標' },
                                { label: 'zoom', documentation: '拡大率(1.0=等倍)' },
                                { label: 'r', documentation: '回転角度' }
                            ]
                        },
                    };

                    const info = helpMap[functionName];
                    if (!info) return null;

                    const sigInfo = new vscode.SignatureInformation(info.label);
                    sigInfo.parameters = info.parameters.map(
                        p => new vscode.ParameterInformation(p.label, p.documentation)
                    );

                    const sigHelp = new vscode.SignatureHelp();
                    sigHelp.signatures = [sigInfo];
                    sigHelp.activeSignature = 0;
                    sigHelp.activeParameter = Math.min(
                    calculateActiveParameter(substring),
                    info.parameters.length - 1
                    );

                    return sigHelp;
                }
            },
            '(', ','
        )
    );

  context.subscriptions.push(
    vscode.languages.registerSignatureHelpProvider(
      { scheme: 'file', language: 'lua' },
      {
        provideSignatureHelp(document, position, token, ctx) {
          const line = document.lineAt(position.line).text;

          const triggerRegex = /^--(track|check|col|file|font|figure|select|value)@/;
          const match = line.match(triggerRegex);
          if (!match) return null;

          const kind = match[1];
          const sig = new vscode.SignatureHelp();
          sig.activeParameter = 0;

          function createSignature(label, params) {
            const s = new vscode.SignatureInformation(label);
            s.parameters = params.map(p => new vscode.ParameterInformation(p));
            return s;
          }

          switch (kind) {
            case 'track':
              sig.signatures = [
                createSignature('--track@変数名:項目名,最小値,最大値,デフォルト値[,移動単位]', ['', '', '', '1 or 0.1 or 0.01 or 0.001']),
              ];
              break;
            case 'check':
              sig.signatures = [
                createSignature('--check@変数名:項目名,デフォルト値', ['','','0 or 1']),
              ];
              break;
            case 'col':
              sig.signatures = [
                createSignature('--col@変数名:項目名,デフォルト値', ['','','カラーコード']),
              ];
              break;
            case 'file':
              sig.signatures = [
                createSignature('--file@変数名:項目名', ['']),
              ];
              break;
            case 'font':
              sig.signatures = [
                createSignature('--font@変数名:項目名,デフォルト値', ['']),
              ];
              break;
            case 'figure':
              sig.signatures = [
                createSignature('--figure@変数名:項目名,デフォルト値', ['']),
              ];
              break;
            case 'select':
              sig.signatures = [
                createSignature('--select@変数名:項目名=デフォルト値,選択肢=値,選択肢=値,...', ['']),
              ];
              break;
            case 'value':
              sig.signatures = [
                createSignature('--value@変数名:項目名,デフォルト値', ['','','数値→0,文字列→"あ",配列→{0,0,0}']),
              ];
              break;
          }

          return sig;
        }
      },
      ',', '@' 
    )
    );
    
    context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'lua' },
    {
      provideCompletionItems(document, position) {
        const line = document.lineAt(position.line).text;
        const text = line.substring(0, position.character);

        const match = text.match(/obj\.(\w*)$/);
        if (!match) return;

        const typed = match[1];  

        const candidates = [
          'draw',
          'drawpoly',
          'mes',
          'load',
          'effect',
          'rand',
          'setfont',
          'setoption',
          'getvalue',
          'setanchor',
          'getpixel',
          'pixeloption',
          'getaudio',
          'copybuffer',
          'clearbuffer',
          'pixelshader',
          'computeshader',
          'getpoint',
          'getinfo',
          'getoption',
          'interpolation'
        ];

        return candidates
          .filter(name => name.startsWith(typed)) 
          .map(name => {
            const item = new vscode.CompletionItem(`obj.${name}`, vscode.CompletionItemKind.Function);
            item.insertText = name;
            item.filterText = `obj.${name}`;
            item.detail = 'AviUtl2 独自関数';
            return item;
          });
      }
    },
    '.','a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t','u',
    'v','w','x','y','z'
    )
    );

    context.subscriptions.push(
  vscode.languages.registerCompletionItemProvider(
    { language: 'lua', scheme: 'file' },
    {
      provideCompletionItems(document, position) {
        const line = document.lineAt(position.line).text;
        const text = line.substring(0, position.character);

        const match = text.match(/\b(\w*)$/);
        if (!match) return;

        const typed = match[1];

        const functions = [
            'RGB',
            'HSV',
            'OR',
            'AND',
            'XOR',
            'SHIFT',
            'rotation'
        ];
        return functions
          .filter(name => name.startsWith(typed))
          .map(name => {
            const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Function);
            item.insertText = name;
            item.detail = 'AviUtl2 独自関数';
            return item;
          });
        }
    },
    ''
    )
    );

    context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'lua' },
    {
      provideCompletionItems(document, position) {
        const line = document.lineAt(position.line).text;
        const text = line.substring(0, position.character);

        const match = text.match(/obj\.(\w*)$/);
        if (!match) return;

        const typed = match[1]; 

        const candidates = [
          'rx',
          'ry',
          'rz',
          'zoom',
          'alpha',
          'aspect',
          'x',
          'y',
          'z',
          'w',
          'h',
          'screen_w',
          'screen_h',
          'framerate',
          'frame',
          'time',
          'totalframe',
          'totaltime',
          'layer',
          'index',
          'num'
        ];

        return candidates
          .filter(name => name.startsWith(typed)) 
          .map(name => {
            const item = new vscode.CompletionItem(`obj.${name}`, vscode.CompletionItemKind.Variable);
            item.insertText = name;
            item.filterText = `obj.${name}`;
            item.detail = 'AviUtl2 独自変数';
            return item;
          });
      }
    },
    '.','a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t','u',
    'v','w','x','y','z'
    )
    );

    context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
    { language: 'lua', scheme: 'file' },
    {
      provideCompletionItems(document, position) {
        const line = document.lineAt(position.line).text;
        const text = line.substring(0, position.character);
        const match = text.match(/obj\.o(\w*)$/);
        if (!match) return;

        const typed = match[1]; 

        const targets = ['ox', 'oy', 'oz'];
        return targets
          .filter(name => name.startsWith(`o${typed}`))
          .map(name => {
            const item = new vscode.CompletionItem(`obj.${name}`, vscode.CompletionItemKind.Variable);
            item.insertText = name;
            item.filterText = `obj.${name}`;
            return item;
          });
      }
    },
    '' 
    )
    );


    context.subscriptions.push(
  vscode.languages.registerCompletionItemProvider(
    { language: 'lua', scheme: 'file' },
    {
      provideCompletionItems(document, position) {
        const line = document.lineAt(position.line).text;
        const text = line.substring(0, position.character);

        if (!/--\w*$/.test(text)) return undefined;

        const tags = [
          'track@',
          'check@',
          'color@',
          'file@',
          'font@',
          'figure@',
          'select@',
          'value@',
          'label:',
          'script:',
          'information:'
        ];

        return tags.map(tag => {
          const item = new vscode.CompletionItem(`--${tag}`, vscode.CompletionItemKind.Snippet);
          item.insertText = `${tag}`;
          item.detail = 'AviUtl2 設定項目';
          return item;
        });
      }
    },
    '-'
    )
    );
}



function calculateActiveParameter(text) {
    const openParenIndex = text.lastIndexOf('(');
    if (openParenIndex === -1) return 0;

    const afterParen = text.substring(openParenIndex + 1);

    let commaCount = 0;
    let inString = false;
    let stringChar = '';
    let parenDepth = 0;
    let curlyDepth = 0;

    for (let i = 0; i < afterParen.length; i++) {
        const char = afterParen[i];

        if (!inString && (char === '"' || char === "'")) {
            inString = true;
            stringChar = char;
        } else if (inString && char === stringChar && afterParen[i - 1] !== '\\') {
            inString = false;
            stringChar = '';
        }

        if (!inString) {
            if (char === '(') {
                parenDepth++;
            } else if (char === ')') {
                parenDepth--;
            } else if (char === '{') {
                curlyDepth++;
            } else if (char === '}') {
                curlyDepth--;
            } else if (char === ',' && parenDepth === 0 && curlyDepth === 0) {
                commaCount++;
            }
        }
    }

    return commaCount;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};